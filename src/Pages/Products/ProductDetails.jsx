import {
  AiFillTwitterCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillPrinter,
} from "react-icons/ai";

import { MdOutlineCategory } from "react-icons/md";

import {
  BsFacebook,
  BsPinterest,
  BsShareFill,
  BsBookmark,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import ProductSkeleton from "./ProductSkeleton";

const ProductDetails = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduct] = useState([]);

  const singleProduct = products.find((item) => item._id * 1 === id * 1);
  console.log(singleProduct);

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
  const {
    available,
    brand_name,
    categories,
    // dimensions,
    price,
    product_name,
    images_link,
    short_description,
    tags,
    reference,
  } = singleProduct || {};
  return (
    <>
      {isLoading && <ProductSkeleton />}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
          {/* left- product carousel */}
          <div className="p-5">
            <Carousel className="z-0 ">
              {images_link?.length &&
                images_link.map((item, i) => (
                  <div key={i}>
                    <img src={images_link[i]} />
                  </div>
                ))}
            </Carousel>
          </div>

          {/* right- product details */}
          <div className="p-5">
            <h3 className="text-2xl font-bold "> {product_name}</h3>
            <p className="font-bold my-2">Price: $ {price} </p>
            <p className="font-bold ">Brand: {brand_name}</p>
            <p className="font-bold my-2">Reference: {reference}</p>
            <p className="font-bold ">In Stock: {available} </p>
            <p className="font-bold my-2">
              Short description: {short_description}
            </p>
            {/* product size */}
            <div className="flex my-5">
              <p className="font-bold ">Size:</p>
              <div className="flex gap-3 ms-3">
                <div className="flex justify-center items-center h-7 w-7 bg-white border border-gray-300  shadow-md transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-none p-2">
                  S
                </div>
                <div className="flex justify-center items-center h-7 w-7 bg-white border border-gray-300  shadow-md transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-none p-2">
                  M
                </div>
                <div className="flex justify-center items-center h-7 w-7 bg-white border border-gray-300  shadow-md transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-none p-2">
                  L
                </div>
                <div className="flex justify-center items-center h-7 w-7 bg-white border border-gray-300  shadow-md transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-none p-2">
                  XL
                </div>
                <div className="flex justify-center items-center h-7 w-7 bg-white border border-gray-300  shadow-md transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-none p-1">
                  XXL
                </div>
              </div>
            </div>
            <div className="divider divide-dotted"></div>
            {/* add to cart */}
            <div className="flex gap-5">
              <input
                type="number"
                name="number"
                id=""
                className="w-20 text-center rounded-md border border-spacing-2 hover:border-orange-900 transition duration-300 ease-in-out"
                onInput={(e) => {
                  const currentValue = parseInt(e.target.value); // Get the current value
                  if (currentValue < 0) {
                    e.target.value = 0; // Set the value to 0 if it's negative
                  }
                }}
              />

              <button className="btn bg-orange-900 text-white p-3 rounded-full hover:border-orange-900 hover:text-orange-900">
                <AiOutlineShoppingCart className="h-6 w-6" /> Add to cart
              </button>
              <button className="btn text-center border border-spacing-2 rounded-md hover:border-orange-900 transition duration-300 ease-in-out">
                <AiOutlineHeart className="h-8 w-8 hover:border-orange-900 hover:text-orange-900" />
              </button>
            </div>
            <div className="divider divide-dotted"></div>
            {/* share, print, category, tags */}
            <div className="flex">
              <h3 className="flex text-1xl font-bold my-4 mr-3">
                <BsShareFill className="mx-2 mt-1" /> Share this:
              </h3>
              <div className=" mt-5">
                <FacebookShareButton
                  url={`https://enchanting-longma-0ffd29.netlify.app/blog/${id}`}
                >
                  <BsFacebook className="w-5 h-5 " />
                </FacebookShareButton>

                <PinterestShareButton
                  url={`https://enchanting-longma-0ffd29.netlify.app/blog/${id}`}
                >
                  <BsPinterest className="w-5 h-5 mx-2 " />
                </PinterestShareButton>

                <TwitterShareButton
                  url={`https://enchanting-longma-0ffd29.netlify.app/blog/${id}`}
                >
                  <AiFillTwitterCircle className="w-5 h-5 " />
                </TwitterShareButton>
              </div>
            </div>
            {/* print */}
            <button>
              {" "}
              <p className="flex text-1xl font-bold">
                <AiFillPrinter className="mx-2" />{" "}
                <span className="-mt-1">Print</span>
              </p>
            </button>
            {/* category */}
            <p className="flex text-1xl font-bold my-2">
              <MdOutlineCategory className="mx-2" />
              <span className="-mt-1">Category: {categories?.join(", ")}</span>
            </p>
            {/* tags */}
            <p className="flex text-1xl font-bold my-2">
              <BsBookmark className="mx-2" />{" "}
              <span className="-mt-1">Tags: {tags?.join(", ")} </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
