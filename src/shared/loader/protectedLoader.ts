import { prOidc } from 'oidc'

export async function protectedRouteLoader(
  extraQueryParams?: Record<string, string>
) {
  const oidc = await prOidc

  if (oidc.isUserLoggedIn) {
    return null
  }

  await oidc.login({
    doesCurrentHrefRequiresAuth: true,
    extraQueryParams,
  })
}
