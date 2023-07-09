import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import Card from "../../Shared/Card";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 400,
  duration: 1000,
});

const TopPicksProduct = () => {
  const [products, setProducts] = useState([]);
  // console.log(typeof products);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); // Add an empty dependency array to useEffect to run only once on initial render

  return (
    <div
      className="my-16 "
      data-aos="slide-up"
      data-aos-offset="400"
      data-aos-duration="1000"
    >
      <Title
        heading={"Top Picks For You"}
        subHeading={
          "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {products.slice(0, 9).map((product) => (
          <Card key={product._id} product={product} />
        ))}
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
