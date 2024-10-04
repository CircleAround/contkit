import { EntriesConfig, defaultClientConfig } from 'bistrio/client'
import { loadPage } from '../../config/client/imports'
import { RoutesWrapper } from '../components/RoutesWrapper'
import { routes as mainRoutes } from '../routes/main'

const el = 'app'

export const entriesConfig: EntriesConfig = {
  main: { routes: mainRoutes, el, loadPage, RoutesWrapper },
}

export const clientConfig = defaultClientConfig()
