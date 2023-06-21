import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import logo from "../assets/AllPics/logo.jpg";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

const HomeFooter = () => {
  return (
    <>
      <div
        className="flex items-center justify-center my-16 "
        data-aos="slide-up"
        data-aos-delay="500"
        data-aos-offset="300"
        data-aos-duration="1000"
      >
        <div>
          <div className="grid text-center justify-items-center p-12">
            <img className="mb-16" src={logo} alt="Logo" />

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="">
                <h2 className="text-2xl mb-3">CALL US</h2>
                <p>+01 234 567890</p>
              </div>
              <div>
                <h2 className="text-2xl mb-3">ADDRESS</h2>
                <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
              </div>
              <div>
                <h2 className="text-2xl mb-3">E-MAIL</h2>
                <p>demo@demo.com</p>
              </div>
            </div>
          </div>
          <div className="divider w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center text-center pb-6">
            <div className="copyright">
              {" "}
              © 2023 - Ecommerce software by PrestaShop™
            </div>
            <div className="social_icons flex gap-6">
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
    </>
  );
};

export default HomeFooter;
