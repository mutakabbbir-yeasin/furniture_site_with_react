import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Info from "../Pages/Home/Info";
import "../index.css";
import HomeFooter from "../Shared/HomeFooter";
import OtherFooter from "../Shared/OtherFooter";

const Main = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar />
      <Outlet />
      <Info />
      {location.pathname === "/" ? <HomeFooter /> : <OtherFooter />}
    </>
  );
};

export default Main;
