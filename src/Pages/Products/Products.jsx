import Title from "../../Shared/Title";
import ProductCard from "../ProductCard/ProductCard";
import products2 from "../../../public/products.json";

const Products = () => {
  return (
    <div
      className="animate-slide-up delay-200"
      data-aos="slide-up"
      data-aos-offset="200"
      data-aos-duration="1000"
    >
      <Title
        heading={"Our Products"}
        subHeading={
          "Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
        }
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-16">
        {products2?.map((product) => {
          //   console.log(product);
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
