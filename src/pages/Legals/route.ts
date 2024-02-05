import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { LegalPage } from './LegalsPage'

export const legalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'mentions-legales',
  component: LegalPage,
  loader: () => {
    document.title = 'Mentions Légales'
  },
})
