import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Blog from "../Pages/Blog/Blog";
import NoDataFound from "../Pages/NoDataFound/NoDataFound";
import ViewBlogDetails from "../Pages/Blog/ViewBlogDetails";
import ProductDetails from "../Pages/Products/ProductDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ShowCartProduct from "../Pages/showCartProduct/ShowCartProduct";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NoDataFound />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/cartdetails",
      //   element: (
      //     <PrivateRoute>
      //       <ShowCartProduct />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <ViewBlogDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "mycart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "cartdetails",
        element: (
          <PrivateRoute>
            <ShowCartProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
