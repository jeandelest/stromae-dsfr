import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout";
import { ProtectedPage } from "../pages/ProtectedPage";
import { PublicPage } from "../pages/PublicPage";
import { useOidc } from "oidc";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "protected",
        element: <RequireAuth><ProtectedPage /></RequireAuth>,
      },
      {
        index: true,
        Component: PublicPage
      },

    ]
  }
]);

function RequireAuth(params: { children: React.ReactNode; }) {

  const { children } = params;

  const { oidc } = useOidc();

  if (!oidc.isUserLoggedIn) {
    oidc.login({ doesCurrentHrefRequiresAuth: true });
    return null;
  }

  return children;

}



