import type { QueryClient } from '@tanstack/react-query'
import { Layout } from './Layout'
import {
  createRootRouteWithContext,
  createRoute,
  Outlet,
} from '@tanstack/react-router'
import { ErrorPage } from 'pages/Error/ErrorPage'
import { visualizeRoute } from 'pages/Visualize/visualizeRoute'

export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  notFoundComponent: () => (
    <Layout>
      <ErrorPage code={404} />
    </Layout>
  ),
})

// test route, need to be removed
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <>Index Route</>,
})

export const routeTree = rootRoute.addChildren([indexRoute, visualizeRoute])
