import Title from "../../Shared/Title";
import products from "../../../public/products.json";
import Card from "../../Shared/Card";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const TopPicksProduct = () => {
  Aos.init({
    offset: 300,
    duration: 1000,
  });
  return (
    <div
      className=" items-center justify-center  animate-slide-up delay-200"
      data-aos="slide-up"
      data-aos-offset="100"
      data-aos-duration="1000"
    >
      <Title
        heading={"Top Picks For You"}
        subHeading={
          "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {products.slice(0, 9).map((product) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
      <div className="text-center">
        <Link to="/products" className="btn btn-neutral px-8">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default TopPicksProduct;
