import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { SecurityPage } from './SecurityPage'

export const securityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'securite',
  component: SecurityPage,
  loader: () => {
    //TODO get name (Filière d'Enquête) in metadata
    document.title = "Sécurité | Filière d'Enquête"
  },
})
