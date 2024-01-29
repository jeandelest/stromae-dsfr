import { Layout } from './Layout/Layout'
import { createRootRoute, createRoute, createRouter, NotFoundRoute } from '@tanstack/react-router'
import { VisualizePage } from 'pages/Visualize/Visualize'
import { z } from 'zod'

import { ErrorPage } from 'pages/Error/ErrorPage'
import { OrchestratorPage } from 'pages/OrchestratorPage'

const rootRoute = createRootRoute({
  component: Layout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <>Index Route</>
})

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <ErrorPage code={404} />,
})


export const visualizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'visualize',
  component: VisualizePage,
  validateSearch: z.object({
    source: z.string().optional(),
    metadata: z.string().optional(),
    data: z.string().optional(),
    nomenclature: z.record(z.string()).optional()
  }),
  loaderDeps: ({ search }) => search,
  loader: async ({ deps: { source, data, metadata, nomenclature } }) => ({ source, data, metadata, nomenclature }),
})

export const orchestratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: OrchestratorPage,
  path: "/orchestrator"
})
const routeTree = rootRoute.addChildren([indexRoute, visualizeRoute, orchestratorRoute])

export const router = createRouter({ routeTree, notFoundRoute })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
