import { FaShoppingCart, FaHome, FaCalendar, FaWallet } from "react-icons/fa";
import {
  AiOutlineContacts,
  AiOutlineMenu,
  AiOutlineShopping,
} from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import "./../index.css";

import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
// import logo from "../../src/assets/AllPics/logo.jpg";

const Dashboard = () => {
  const { cartDataList } = useContext(CartContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full text-base-content dashboard_ul bg-[#cd8f5c] ">
          <h2 className="text-white text-3xl font-bold text-center my-4 underline">
            Kosi Furniture
          </h2>
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/user-home">
              <FaHome />
              User Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar />
              Reservation
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/payments">
              <FaWallet />
              Payment History
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/cartdetails">
              <FaShoppingCart />
              <p> My Cart ({cartDataList?.length || 0})</p>
            </NavLink>
          </li>
          <div className="divider divide-emerald-50"></div>

          <li>
            <NavLink to="/dashboard/home">
              <FaHome />
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/menu">
              <AiOutlineMenu />
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
              <AiOutlineShopping />
              Shop
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <AiOutlineContacts />
              Contact
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
