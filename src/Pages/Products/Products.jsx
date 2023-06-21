import Title from "../../Shared/Title";
import products2 from "../../../public/products.json";
import Card from "../../Shared/Card";
import ProductSkeleton from "../Products/ProductSkeleton";
import { useEffect } from "react";
import { useState } from "react";
// import TopPicksProduct from "../Home/TopPicksProduct";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Title
        heading={"Our Products"}
        subHeading={
          "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        }
      />
      {/* {isLoading && <h2>Loading.....</h2>} */}

      {isLoading && <ProductSkeleton />}

      {!isLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {products2?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
