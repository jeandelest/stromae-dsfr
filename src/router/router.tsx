import type { QueryClient } from '@tanstack/react-query'
import { Layout } from './Layout/Layout'
import {
  createRootRouteWithContext,
  createRoute,
  NotFoundRoute,
} from '@tanstack/react-router'
import { ErrorPage } from 'pages/Error/ErrorPage'
import { visualizeRoute } from 'pages/Visualize/visualizeRoute'

export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Layout,
})

// test route, need to be removed
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <>Index Route</>,
})

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <ErrorPage code={404} />,
})
export const routeTree = rootRoute.addChildren([indexRoute, visualizeRoute])
