import Blog from "../Blog/Blog";
import Banner from "./Banner";
import Brands from "./Brands";
import Info from "./Info";
import ProductHighlight from "./ProductHighlight";
import TopPicksProduct from "./TopPicksProduct";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductHighlight />
      <TopPicksProduct />
      <Brands />
      <Blog />
      <Info />
    </>
  );
};

export default Home;
