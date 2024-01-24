import React from 'react'
import ReactDOM from 'react-dom/client'
import { OidcProvider } from 'oidc'
import { RouterProvider } from '@tanstack/react-router'
import { router } from 'router/router'
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa'
import { Link } from '@tanstack/react-router'

startReactDsfr({
  defaultColorScheme: 'system',
  Link,
})

//Only in TypeScript projects
declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: typeof Link
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OidcProvider>
      <RouterProvider router={router} />
    </OidcProvider>
  </React.StrictMode>
)
