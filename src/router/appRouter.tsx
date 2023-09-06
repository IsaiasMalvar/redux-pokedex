import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
