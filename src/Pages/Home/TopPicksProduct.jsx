import Title from "../../Shared/Title";
import products from "../../../public/products.json";
import Card from "../../Shared/Card";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  // delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

const TopPicksProduct = () => {
  return (
    <div
      className="my-16 "
      data-aos="slide-up"
      // data-aos-delay="500"
      data-aos-offset="300"
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
