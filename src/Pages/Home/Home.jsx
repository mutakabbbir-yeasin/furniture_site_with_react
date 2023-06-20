import { useLocation } from "react-router-dom";
import Blog from "../Blog/Blog";
import Banner from "./Banner";
import Brands from "./Brands";
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
    </div>
  );
};

export default Home;
