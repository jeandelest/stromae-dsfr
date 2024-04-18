import type { QueryClient } from '@tanstack/react-query'
import { Layout } from './Layout'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { ErrorComponent } from 'components/Error/ErrorComponent'
import { visualizeRoute } from 'pages/Visualize/route'
import { accessibilityRoute } from 'pages/Accessibility/route'
import { securityRoute } from 'pages/Security/route'
import { siteMapRoute } from 'pages/SiteMap/route'
import { legalsRoute } from 'pages/Legals/route'
import { navigationAssistanceRoute } from 'pages/NavigationAssistance/route'
import { collectRoute } from 'pages/Collect/route'
import { NotFoundError } from 'utils/error/notFoundError'
import { reviewRoute } from 'pages/Review/route'

export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  notFoundComponent: () => (
    <ErrorComponent error={new NotFoundError()} redirectTo="home" />
  ),
})

console.log(import.meta.env.VITE_VISUALIZE_DISABLED)

export const routeTree = rootRoute.addChildren([
  ...(import.meta.env.VITE_VISUALIZE_DISABLED === 'true'
    ? []
    : [visualizeRoute]),
  accessibilityRoute,
  securityRoute,
  siteMapRoute,
  legalsRoute,
  navigationAssistanceRoute,
  collectRoute,
  reviewRoute,
])
