import { createReactOidc } from 'oidc-spa/react'
import { z } from 'zod'

export const { OidcProvider, useOidc, prOidc } = createReactOidc({
  clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
  issuerUri: import.meta.env.VITE_OIDC_ISSUER,
  publicUrl: import.meta.env.BASE_URL,
  decodedIdTokenSchema: z.object({
    sub: z.string(),
    preferred_username: z.string(),
  }),
})
