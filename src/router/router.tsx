import type { QueryClient } from '@tanstack/react-query'
import { Layout } from './Layout'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { ErrorPage } from 'pages/Error/ErrorPage'
import { visualizeRoute } from 'pages/Visualize/route'
import { accessibilityRoute } from 'pages/Accessibility/route'
import { securityRoute } from 'pages/Security/route'
import { siteMapRoute } from 'pages/SiteMap/route'
import { legalsRoute } from 'pages/Legals/route'
import { navigationAssistanceRoute } from 'pages/NavigationAssistance/route'

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

export const routeTree = rootRoute.addChildren([
  visualizeRoute,
  accessibilityRoute,
  securityRoute,
  siteMapRoute,
  legalsRoute,
  navigationAssistanceRoute
])
