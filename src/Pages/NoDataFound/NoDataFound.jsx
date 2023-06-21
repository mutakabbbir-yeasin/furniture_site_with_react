import { Link } from "react-router-dom";
import img from "../../assets/notFound/404.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 300,
  duration: 1000,
});

const NoDataFound = () => {
  return (
    <div
      className="pt-16 "
      data-aos="slide-up"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <div>
        <img className="w-1/2 mx-auto" src={img} alt="Page not found" />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-active btn-neutral  text-2xl px-10 my-16">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoDataFound;
