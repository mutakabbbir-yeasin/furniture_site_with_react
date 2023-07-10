import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import ProductSkeleton from "../Products/ProductSkeleton";
import { Link } from "react-router-dom";

const ShowCartProduct = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [carts, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:5000/cart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data))
      .finally(() => setIsLoading(false));
  }, [user]);

  const handleDecreaseQuantity = (cartId) => {
    setCart((prevCarts) =>
      prevCarts.map((cart) =>
        cart._id === cartId && cart.quantity > 1
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart
      )
    );
    updateSelectedProductQuantity(cartId, -1);
  };

  const handleIncreaseQuantity = (cartId) => {
    setCart((prevCarts) =>
      prevCarts.map((cart) =>
        cart._id === cartId ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
    updateSelectedProductQuantity(cartId, 1);
  };

  const handleProductSelect = (cartId, checked) => {
    if (checked) {
      const selectedCart = carts.find((cart) => cart._id === cartId);
      setSelectedProducts((prevSelectedProducts) => [
        selectedCart,
        ...prevSelectedProducts,
      ]);
    } else {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter((product) => product._id !== cartId)
      );
    }
  };

  const updateSelectedProductQuantity = (cartId, change) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.map((product) =>
        product._id === cartId
          ? { ...product, quantity: product.quantity + change }
          : product
      )
    );
  };

  // Calculate total price of selected products
  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return (
    <>
      <Helmet>
        <title>Kosi Furniture || My Cart</title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold mt-10 text-[#cd8f5c]">
        My Cart information
      </h2>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 ">
          {/* left product details */}
          <div className="lg:col-span-2 ">
            {carts?.map((cart) => (
              <div
                key={cart._id}
                className="card card-side bg-base-100 border border-[#cd8f5c] border-spacing-2 my-3 p-2 "
              >
                {/* product select */}
                <div className="flex justify-start items-start">
                  <input
                    className="h-4 w-4 mr-2 rounded-full"
                    type="checkbox"
                    value={cart._id}
                    onChange={(e) =>
                      handleProductSelect(cart._id, e.target.checked)
                    }
                  />
                </div>
                {/* product image */}
                <img
                  className="w-12 h-12 lg:w-52 md:h-40 object-fill "
                  src={cart?.images_link[0]}
                  alt={cart?.product_name}
                />
                {/* product details */}
                <div className="card-body col-span-2">
                  <h2 className="card-title -mt-7">{cart?.product_name}</h2>
                  <p>{cart?.brand_name}</p>
                  <p className="hidden md:inline-block">
                    {cart?.short_description}
                  </p>
                  <p>Available: {cart?.available} item(s)</p>
                  {/* small device show */}
                  <div className="flex gap-3">
                    <div className="flex h-7 mt-2 lg:hidden ">
                      <button
                        className="bg-base-300 border px-1 hover:border-[#cd8f5c] hover:text-[#cd8f5c]"
                        onClick={() => handleDecreaseQuantity(cart._id)}
                        disabled={cart.quantity === 1}
                      >
                        -
                      </button>
                      <p className="w-12 mx-2  border-spacing-2 text-center pb-1 border hover:border-[#cd8f5c]">
                        {cart?.quantity}
                      </p>
                      <button
                        className="bg-base-300 px-1 border hover:border-[#cd8f5c] hover:text-[#cd8f5c]"
                        onClick={() => handleIncreaseQuantity(cart._id)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p className="font-bold lg:hidden flex mt-2">
                        ${" "}
                        {cart?.quantity > 1
                          ? cart?.quantity * cart?.price
                          : cart?.price}
                      </p>
                    </div>
                  </div>
                </div>
                {/* product cost */}
                <div>
                  <p className="font-bold hidden lg:flex">
                    Price: $
                    {cart?.quantity > 1
                      ? cart?.quantity * cart?.price
                      : cart?.price}
                  </p>
                  {/* quantity select */}
                  <div className=" h-7 mt-2 hidden lg:flex">
                    <button
                      className="bg-base-300 border px-1 hover:border-[#cd8f5c] hover:text-[#cd8f5c]"
                      onClick={() => handleDecreaseQuantity(cart._id)}
                      disabled={cart.quantity === 1}
                    >
                      -
                    </button>
                    <p className="w-12 mx-2 border border-spacing-2 text-center pb-1 border hover:border-[#cd8f5c]">
                      {cart?.quantity}
                    </p>
                    <button
                      className="bg-base-300 px-1 border hover:border-[#cd8f5c] hover:text-[#cd8f5c]"
                      onClick={() => handleIncreaseQuantity(cart._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right order details */}
          <div className="bg-gray-100 card border border-[#cd8f5c] mt-3 h-auto over py-6 px-2">
            <h2 className="text-2xl p-5">Order summary</h2>
            {selectedProducts.length > 0 ? (
              <>
                <ul className="p-5">
                  {selectedProducts.map((product) => (
                    <li key={product._id}>
                      <span className="font-bold">
                        {product.product_name} (${product.price})
                      </span>{" "}
                      - Qty: {product.quantity}
                    </li>
                  ))}
                </ul>
                <p className="p-5 font-bold text-2xl">
                  Total Price: ${totalPrice}
                </p>
                <button className="btn bg-[#cd8f5c] text-white w-40 mx-auto hover:border-[#cd8f5c] hover:text-[#cd8f5c]">
                  <Link>Make Payment</Link>
                </button>
              </>
            ) : (
              <p className="p-5">No products selected.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowCartProduct;
