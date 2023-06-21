import Blog from "../Blog/Blog";
import BlogCard from "../Blog/BlogCard";
// import ProductSkeleton from "../Products/ProductSkeleton";
import Banner from "./Banner";
import Brands from "./Brands";
// import HomeLoading from "./HomeLoading";
import ProductHighlight from "./ProductHighlight";
import TopPicksProduct from "./TopPicksProduct";
// import { useEffect, useState } from "react";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      {/* {(isLoading && <HomeLoading />) || ( */}
      <div className="px-8">
        <Banner />
        <ProductHighlight />
        <TopPicksProduct />
        <Brands />
        <Blog homeBlog={true} />
        {/* <BlogCard /> */}
      </div>
      {/* )} */}
    </>
  );
};

export default Home;
