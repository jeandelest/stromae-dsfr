import { useOidc } from 'oidc-spa/react'

export function AuthStatus() {
  const { oidc } = useOidc()
  if (!oidc.isUserLoggedIn) {
    return (
      <>
        <p>
          You're not logged in.
        </p>

        <button
          onClick={() =>
            oidc.login({
              doesCurrentHrefRequiresAuth: false
            })
          }
        >
          Login
        </button>

      </>
    );
  }

  return (
    <>
      <p>

        You're are logged in.
      </p>
      <button
        onClick={() =>
          oidc.logout({ redirectTo: "home" })
        }
      >
        Logout
      </button>
    </>
  )
}