import { useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { _id, images_link, product_name, short_description, price } = product;
  // console.log(_id);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  return (
    <div className="bg-white mx-auto rounded-lg shadow-md overflow-hidden w-[400px] h-[400px]">
      <div onMouseOver={handleHover} onMouseOut={() => setIsHovered(false)}>
        <Link to={`/products/${_id}`}>
          <img
            src={images_link[0]}
            alt="Card Image"
            className="w-full h-64 object-cover"
          />
        </Link>
        {/* hover icons (add to cart, add to wishlist, show details) */}
        {isHovered && (
          <div className="absolute flex -my-16 ps-24 gap-3 ">
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
        <Link to={`/products/${_id}`}>
          <h3 className="text-lg font-bold text-black ">{product_name}</h3>
        </Link>
        <Link to={`/products/${_id}`}>
          <p className="text-sm font-bold text-black my-2">
            {short_description}
          </p>
        </Link>
        <div className="flex justify-between ">
          <p className="font-bold text-orange-900">$ {price}</p>
          {/* <button className="btn btn-neutral"> */}
          <Link
            className="font-bold p-1 rounded-md border border-spacing-2"
            to={`/products/${_id}`}
          >
            Show more{" "}
          </Link>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
