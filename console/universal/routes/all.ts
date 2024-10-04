import { Router, RouterSupport } from 'bistrio/client'
import { routes as mainRoutes } from './main'
import { Middlewares } from '../middlewares'

export function routes(r: Router, support: RouterSupport<Middlewares>) {
  mainRoutes(r, support)
}
