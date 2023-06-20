import Title from "../../Shared/Title";
import products2 from "../../../public/products.json";
import Card from "../../Shared/Card";
import Aos from "aos";
import ProductSkeleton from "../Products/ProductSkeleton";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
// import TopPicksProduct from "../Home/TopPicksProduct";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  Aos.init({
    offset: 300, // offset (in px) from the original trigger point
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 1000,
  });
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="500"
      data-aos-offset="200"
      data-aos-duration="1000"
    >
      <Title
        heading={"Our Products"}
        subHeading={
          "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        }
      />
      {/* {isLoading && <h2>Loading.....</h2>} */}

      {(isLoading && <ProductSkeleton />) || (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {products2?.map((product) => {
            //   console.log(product);
            return <Card key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
