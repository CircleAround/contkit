import createError from 'http-errors'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import createDebug from 'debug'

import {
  choiceDefaultLanguage,
  choiceLanguageByAcceptLanguage,
  defaultHotMiddlewareClientPath,
  initConfig,
  localeMiddleware,
  useExpressRouter,
  useHMR,
} from 'bistrio'
import { middlewares } from './middlewares'
import { localeMap } from '@universal/locales/index'
import { constructView } from './customizers/construct-view'
import { routes } from '@universal/routes/all'
import { serverRouterConfig } from './config'
import { config } from '../config'
import { HttpResponseError } from 'bistrio'

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

initConfig(config)
const debug = createDebug('bistrio:params')

export async function setup() {
  const app = express()
  app.use(compression())

  const skipList = ['/js/', '/css/', '/favicon.ico']
  app.use(
    logger('dev', {
      skip: (req) => skipList.some((path) => req.originalUrl.startsWith(path)),
    }),
  )
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.use(express.static('dist/public'))

  app.use(
    localeMiddleware({
      defaultLanguage: 'en',
      localeMap: localeMap,
      choiceLanguage: app.get('env') === 'test' ? choiceDefaultLanguage : choiceLanguageByAcceptLanguage,
    }),
  )

  app.use((req, res, next) => {
    debug(`${req.method} ${req.path}`)

    next()
    if (debug.enabled) {
      debug(`req.params: %o`, req.params)
      debug(`req.body: %o`, req.body)
      debug(`req.query: %o`, req.query)
    }
  })

  if (process.env.NODE_ENV === 'development') {
    const clientWebpackConfig = (await import('../config/client/webpack.config')).default
    useHMR(app, {
      clientWebpackConfig,
      hotMiddlewareClientPath: `${defaultHotMiddlewareClientPath}&timeout=7000`,
      hotMiddlewareOptions: { heartbeat: 3500 },
    })
  }

  await useExpressRouter({
    app,
    middlewares,
    routes,
    constructView,
    serverRouterConfig: serverRouterConfig(),
  })

  // error handler
  app.use(function (err: unknown, req, res, _next) {
    // @see https://stackoverflow.com/questions/51624117/how-to-check-for-the-property-type-of-an-unknown-value
    const isHttpError = (err: unknown): err is createError.HttpError<number> => {
      const herr = err as createError.HttpError<number>
      return 'status' in herr && typeof herr.status === 'number'
    }

    const responseJson = (code: number, message: string) => {
      if (code >= 500) {
        console.error(err)
        res.status(code)
        res.json({ err: 'Unexpected Error' })
        return
      } else {
        res.status(code)
        res.json({ err: message })
      }
    }

    console.error('handle error', err)

    if (err instanceof HttpResponseError) {
      responseJson(err.code, err.message)
      return
    }

    if (isHttpError(err)) {
      responseJson(err.status, err.message)
      return
    }

    console.error(err)
    responseJson(500, 'Unexpected Error')
  } as express.ErrorRequestHandler)

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404))
  })

  return app
}
