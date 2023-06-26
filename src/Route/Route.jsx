import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Blog from "../Pages/Blog/Blog";
import NoDataFound from "../Pages/NoDataFound/NoDataFound";
import ViewBlogDetails from "../Pages/Blog/ViewBlogDetails";
import ProductDetails from "../Pages/Products/ProductDetails";

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
        path: "*",
        element: <NoDataFound />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:id",
        element: <ViewBlogDetails />,
        // loader: ({ params }) =>
        //   fetch(
        //     `https://api.json-generator.com/templates/wpdVwhRGKHF0/data?access_token=xa5w6emfbnypcahxuu7ex7n0c4hk9i1uhn6gi5ke/blog/${params.id}`
        // ),
      },
    ],
  },
]);
