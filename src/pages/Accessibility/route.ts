import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { AccessibilityPage } from './AccessibilityPage'

export const accessibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'accessibilite',
  component: AccessibilityPage,
  loader: () => {
    document.title = 'Accessibilité'
  },
})
