import { Layout } from './Layout/Layout'
import { PublicPage } from 'pages/PublicPage'

import { RootRoute, Route, Router } from '@tanstack/react-router'
import { VisualizePage } from 'pages/Visualize/Visualize'
import { z } from 'zod'

const rootRoute = new RootRoute({ component: Layout })

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PublicPage,
})

export const visualizeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'visualize',
  component: VisualizePage,
  validateSearch: z.object({
    source: z.string().optional(),
    metadata: z.string().optional(),
    data: z.string().optional(),
    nomenclature: z.object({ name: z.string(), uri: z.string() }).optional()
  }),
  loaderDeps: ({ search }) => search,
  loader: async ({ deps: { source, data, metadata, nomenclature } }) => ({ source, data, metadata, nomenclature }),
})

const routeTree = rootRoute.addChildren([indexRoute, visualizeRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
