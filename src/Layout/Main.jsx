import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Info from "../Pages/Home/Info";
import "../index.css";
import HomeFooter from "../Shared/HomeFooter";
import OtherFooter from "../Shared/OtherFooter";
import { useEffect, useState } from "react";
import ProductSkeleton from "../Pages/Products/ProductSkeleton";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  return (
    <div>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Info />
          {location.pathname === "/" ? <HomeFooter /> : <OtherFooter />}
        </>
      )}
    </div>
  );
};

export default Main;
