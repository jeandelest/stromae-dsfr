import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { SiteMapPage } from './SiteMapPage'

export const siteMapPath = '/plan-du-site'
export const siteMapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: siteMapPath,
  component: SiteMapPage,
  loader: () => {
    //TODO get name (Filière d'Enquête) in metadata
    document.title = "Plan du site | Filière d'Enquête"
  },
})
