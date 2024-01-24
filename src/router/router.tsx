import { Layout } from './Layout'
import { PublicPage } from 'pages/PublicPage'
import { prOidc } from 'oidc'

import { RootRoute, Route, Router } from '@tanstack/react-router'
import { SecondPage } from 'pages/SecondPage'

const rootRoute = new RootRoute({ component: Layout })

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PublicPage,
})

const protectedRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'protected',
  component: SecondPage,
  //beforeLoad: protectedRouteLoader,
})

const routeTree = rootRoute.addChildren([indexRoute, protectedRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// async function protectedRouteLoader() {
//   const oidc = await prOidc

//   if (oidc.isUserLoggedIn) {
//     return null
//   }

//   await oidc.login({
//     doesCurrentHrefRequiresAuth: true,
//   })
// }
