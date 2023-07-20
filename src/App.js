import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import { Suspense, lazy } from "react";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader } from "./util/auth";
// import {loader as sectionLoader} from './pages/Home';

const MenuPage = lazy(() => import("./pages/Menu"));
const CartPage = lazy(() => import("./pages/Cart"));
const NewsletterPage = lazy(() => import("./pages/Newsletter"));
const AuthenticationPage = lazy(() => import("./pages/Authentication"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <HomePage></HomePage>
          </Suspense>
        ),
        loader: () => import("./pages/Home").then((module) => module.loader()),
      },
      {
        path: "menu",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <MenuPage></MenuPage>
          </Suspense>
        ),
        loader: () => import("./pages/Menu").then((module) => module.loader()),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CartPage></CartPage>
          </Suspense>
        ),
      },
      {
        path: "newsletter",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <NewsletterPage></NewsletterPage>
          </Suspense>
        ),
        action: (meta) =>
          import("./pages/Newsletter").then((module) => module.action(meta)),
      },
      {
        path: "auth",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AuthenticationPage></AuthenticationPage>
          </Suspense>
        ),
        action: (meta) =>
          import("./pages/Authentication").then((module) =>
            module.action(meta)
          ),
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
