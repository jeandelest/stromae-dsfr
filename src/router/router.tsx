import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout";
import { ProtectedPage } from "../pages/ProtectedPage";
import { PublicPage } from "../pages/PublicPage";
import { RequiresAuthentication } from "oidc/RequiresAuth";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: 'protected',
          element: <RequiresAuthentication><ProtectedPage /></RequiresAuthentication>,
        },
        {
          index: true,
          Component: PublicPage
        },
        {
          path: 'visualize',
          element: <div>Visualize</div>,
        },
      ]
    }], { basename: "/v3" });
