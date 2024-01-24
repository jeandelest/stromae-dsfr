/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OIDC_ISSUER: string
  readonly VITE_OIDC_CLIENT_ID: string
  readonly VITE_APP_VERSION: string
  readonly VITE_LUNATIC_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
