import Blog from "../Blog/Blog";
import Banner from "./Banner";
import Brands from "./Brands";
import Info from "./Info";
import ProductHighlight from "./ProductHighlight";
import TopPicksProduct from "./TopPicksProduct";

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <ProductHighlight />
      <TopPicksProduct />
      <Brands />
      <Blog />
      <Info />
    </div>
  );
};

export default Home;
