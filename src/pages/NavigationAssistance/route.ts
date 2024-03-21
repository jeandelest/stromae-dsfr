import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { NavigationAssistancePage } from './NavigationAssistancePage'

export const navigationAssistanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'aide-a-la-navigation',
  component: NavigationAssistancePage,
  loader: () => {
    //TODO get name (Filière d'Enquête) in metadata
    document.title = "Aide à la navigation | Filière d'Enquête"
  },
})
