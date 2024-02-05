import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { SecurityPage } from './SecurityPage'

export const securityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'securite',
  component: SecurityPage,
  loader: () => {
    document.title = 'Sécurité'
  },
})
