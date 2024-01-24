import React from 'react'
import ReactDOM from 'react-dom/client'
import { OidcProvider } from 'oidc'
import { type Route, RouterProvider } from '@tanstack/react-router'
import { router } from 'router/router'
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa'
import { Link } from '@tanstack/react-router'

startReactDsfr({
  defaultColorScheme: 'system',
  Link,
})

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: (props: Parameters<typeof Link<Route>>[0]) => JSX.Element
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OidcProvider>
      <RouterProvider router={router} />
    </OidcProvider>
  </React.StrictMode>
)
