import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import OnePage from "../pages/OnePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <OnePage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
