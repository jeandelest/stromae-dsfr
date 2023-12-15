import { useOidc } from "oidc-spa/react";
import type { ReactNode } from "react";

export function RequiresAuthentication(props:
  { children: ReactNode }) {

  const { children } = props
  const { oidc } = useOidc()

  if (!oidc.isUserLoggedIn) {
    oidc.login({ doesCurrentHrefRequiresAuth: true });
    return null;
  }

  return <>{children}</>
}