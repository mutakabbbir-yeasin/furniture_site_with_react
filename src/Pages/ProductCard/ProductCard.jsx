import { useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  //   console.log("product card===>", product);
  const { images_link, product_name, short_description, price } = product;
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  return (
    <div className="bg-white mx-auto rounded-lg shadow-md overflow-hidden w-72 ">
      <div onMouseOver={handleHover} onMouseOut={() => setIsHovered(false)}>
        <img
          src={images_link[0]}
          alt="Card Image"
          className="w-full h-52 object-cover"
        />
        {isHovered && (
          <div className="absolute flex -my-16 ms-16 gap-3 ">
            <div className="bg-slate-200 p-3 rounded-lg">
              <Link to="/">
                <AiOutlineShoppingCart className="w-6 h-6" />
              </Link>
            </div>
            <div className="bg-slate-200 p-3 rounded-lg">
              <Link to="/">
                <AiFillHeart className="w-6 h-6 " />
              </Link>
            </div>
            <div className="bg-slate-200 p-3 rounded-lg">
              <Link to="/">
                <GrView className="w-6 h-6 " />
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-black ">{product_name}</h3>
        <p className="text-sm font-bold text-black my-2">{short_description}</p>
        <p className="text-sm font-bold text-green-800">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
