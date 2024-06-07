import { createMockReactOidc } from 'oidc-spa/mock/react'
import { createReactOidc } from 'oidc-spa/react'
import { z } from 'zod'

export const { OidcProvider, useOidc, prOidc } =
  import.meta.env.VITE_OIDC_ENABLED === 'false'
    ? createMockReactOidc({ isUserInitiallyLoggedIn: false })
    : createReactOidc({
        clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
        issuerUri: import.meta.env.VITE_OIDC_ISSUER,
        publicUrl: import.meta.env.BASE_URL,
        decodedIdTokenSchema: z.object({
          sub: z.string(),
          preferred_username: z.string(),
        }),
      })
