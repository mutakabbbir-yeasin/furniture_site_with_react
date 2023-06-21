import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/AllPics/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

const OtherFooter = () => {
  return (
    <div
      className="flex items-center justify-center my-16 "
      data-aos="slide-up"
      data-aos-delay="500"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-items-center p-16">
          <div className="first_div">
            <img className="mb-6" src={logo} alt="Logo" />
            <p className="my-6">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
            <div className="social_icons flex gap-6 ">
              <Link to="/">
                <FaFacebookF className="w-6 h-6" />
              </Link>

              <Link to="/">
                <AiOutlineTwitter className="w-6 h-6" />
              </Link>

              <Link to="/">
                <AiOutlineGooglePlus className="w-7 h-7" />
              </Link>

              <Link to="/">
                <FaPinterest className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="second_div">
            <h2 className="font-bold mb-4">ABOUT</h2>
            <ul tabIndex={0} className="grid gap-3 ">
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
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
            </ul>
          </div>
          <div className="third_div">
            <h2 className="font-bold mb-4">HELP</h2>
            <ul tabIndex={0} className="grid gap-3 ">
              <li>
                <Link to="/">Payment Options</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="fourth_div  gap-10">
            <h2 className="font-bold mb-6">NEWSLETTER</h2>
            <div className=" flex gap-10">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                id=""
              />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="divider w-full"></div>
        <div className="flex justify-between px-10 grid-cols-1 md:grid-cols-3 pb-6">
          <div className="copyright">
            {" "}
            © 2023 - Ecommerce software by PrestaShop™
          </div>
          <div className="pages">
            <ul tabIndex={0} className="flex   gap-5 ">
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
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherFooter;
