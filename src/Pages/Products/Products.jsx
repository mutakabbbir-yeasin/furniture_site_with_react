import Title from "../../Shared/Title";
// import products2 from "../../../public/products.json";
import Card from "../../Shared/Card";
import ProductSkeleton from "../Products/ProductSkeleton";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import TopPicksProduct from "../Home/TopPicksProduct";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/product`);
      console.log(response);
      setProduct(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
