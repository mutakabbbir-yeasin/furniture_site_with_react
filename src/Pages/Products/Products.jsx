import Title from "../../Shared/Title";
// import products2 from "../../../public/products.json";
import Card from "../../Shared/Card";
import ProductSkeleton from "../Products/ProductSkeleton";
import { useEffect } from "react";
import { useState } from "react";
// import TopPicksProduct from "../Home/TopPicksProduct";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    fetch(
      "https://api.json-generator.com/templates/g1IZOSMqxKte/data?access_token=xa5w6emfbnypcahxuu7ex7n0c4hk9i1uhn6gi5ke"
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading && <ProductSkeleton />}

      <Title
        heading={"Our Products"}
        subHeading={
          "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        }
      />

      {!isLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
