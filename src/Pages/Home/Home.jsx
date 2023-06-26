import Blog from "../Blog/Blog";
// import ProductDetails from "../Products/ProductDetails";
import Banner from "./Banner";
import Brands from "./Brands";
import ProductHighlight from "./ProductHighlight";
import TopPicksProduct from "./TopPicksProduct";

const Home = () => {
  return (
    <>
      <div className="px-8">
        <Banner />
        {/* <ProductDetails /> */}
        <ProductHighlight />
        <TopPicksProduct />
        <Brands />
        <Blog homeBlog={true} />
      </div>
    </>
  );
};

export default Home;
