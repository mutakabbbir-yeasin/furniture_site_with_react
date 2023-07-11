import { Link } from "react-router-dom";
import logo from "../assets/AllPics/logo.jpg";
import "./Shared.css";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { CartContext } from "../providers/CartProvider";
import { useEffect } from "react";
import useCart from "../hook/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cartDataList } = useContext(CartContext);
  const { getCartListData } = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCartListData();
  }, []);
  return (
    <div className="navbar navbar_style  sticky top-0 z-10">
      <div className="navbar-start grid grid-cols-3">
        {/* Dropdown menu start */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#CD8F5C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link>Category</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link>Pages</Link>
            </li>
          </ul>
        </div>
        {/* Dropdown menu end */}
      </div>
      {/* logo */}
      <div className="navbar-center">
        <Link to="/">
          <img className="w-24 h-7" src={logo} alt="logo" />
        </Link>
      </div>
      {/* Right side icons starts */}
      <div className="navbar-end">
        {/* Search icon */}
        {/* <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        {user ? (
          <>
            <button type="button" className="dropdown">
              <img
                className="h-10 w-10 rounded-full mx-2"
                src={user?.photoURL}
                alt=""
              />
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 gap-2 -ms-14"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
                {/* <li>
                  <Link to="/login">Login</Link>
                </li> */}
              </ul>
            </button>
          </>
        ) : (
          <>
            <button type="button" className="dropdown">
              <BsPerson className="h-6 w-6" />

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 gap-2 -ms-14"
              >
                {user ? (
                  <>
                    <li>
                      <Link onClick={handleLogOut}>Logout</Link>
                    </li>{" "}
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            </button>
          </>
        )}
        {/* cart icon */}
        <button className="btn btn-ghost btn-circle ">
          {/* <Link to="/cartdetails"> */}
          <Link to="dashboard/cartdetails">
            <div className="indicator">
              <AiOutlineShoppingCart className="h-8 w-8" />
              <span className="badge badge-xs bg-[#CD8F5C] p-2 text-white indicator-item">
                {cartDataList?.length || 0}
              </span>
            </div>
          </Link>
        </button>
      </div>
      {/* Right side icons ends */}
    </div>
  );
};

export default Navbar;
