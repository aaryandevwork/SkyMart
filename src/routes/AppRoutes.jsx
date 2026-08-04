import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { useEffect } from "react";
import ProductDetailPage from "../pages/ProductDetailPage";

const AppRoutes = () => {

  const dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("hydrate user");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    console.log("loggedInUser",loggedInUser);
    if(!loggedInUser){
      return;
    }
    dispatch(addUser(loggedInUser));
  }

  useEffect(() => {
    hydrateUser();
  } , [])


  let Router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            },
            {
              path: "products/:id",
              element: <ProductDetailPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
};

export default AppRoutes;
