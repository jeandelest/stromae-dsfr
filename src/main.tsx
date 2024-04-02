/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { type ReactElement } from 'react'
import ReactDOM from 'react-dom/client'
import { OidcProvider } from 'oidc'
import {
  RouterProvider,
  createRouter,
  Link,
  type LinkProps,
} from '@tanstack/react-router'
import { routeTree } from 'router/router'
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MuiDsfrThemeProvider } from '@codegouvfr/react-dsfr/mui'

startReactDsfr({
  defaultColorScheme: 'system',
  // @ts-expect-error
  Link,
})

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: (props: LinkProps & { ref?: any }) => ReactElement
  }
}

export const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiDsfrThemeProvider>
      <QueryClientProvider client={queryClient}>
        <OidcProvider>
          <RouterProvider router={router} />
        </OidcProvider>
      </QueryClientProvider>
    </MuiDsfrThemeProvider>
  </React.StrictMode>
)
