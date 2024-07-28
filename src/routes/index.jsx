import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/home/index.jsx";
import ErrorPage from "../pages/error-page/index.jsx";
import RegisterPage from "../pages/regester/index.jsx";
import DashboadPage from "../pages/dashboard/index.jsx";
import CreateNewBlogPage from "../pages/create-new-blog/index.jsx";
import BlogPage from "../pages/single-blog/index.jsx";
import App from "../App.jsx";
import ProtectedRoute from "../protected-route.jsx";
import LoginPage from "../pages/login/index.jsx";
export const routerWraper = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboadPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-new-blog",
        element: (
          <ProtectedRoute>
            <CreateNewBlogPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/single-blog/:blogId",
        element: <BlogPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);