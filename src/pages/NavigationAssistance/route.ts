import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { NavigationAssistancePage } from './NavigationAssistancePage'

export const navigationAssistanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'aide-a-la-navigation',
  component: NavigationAssistancePage,
  loader: () => {
    document.title = 'Aide à la navigation'
  },
})
