import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import ProductSkeleton from "../Products/ProductSkeleton";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { CartContext } from "../../providers/CartProvider";
import useCart from "../../hook/useCart";
// import useCart from "../../hook/useCart";

const ShowCartProduct = () => {
  const { user } = useContext(AuthContext);

  // const [carts, setCarts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { cartDataList, setCartDataList } = useContext(CartContext);

  const { getCartListData, loading } = useCart();
  // const [, refetch] = useCart();

  // delete a product from shopping cart
  console.log("cartDataList===>", cartDataList);
  const handleDecreaseQuantity = (cartId) => {
    setCartDataList((prevCarts) =>
      prevCarts.map((cart) =>
        cart._id === cartId && cart.quantity > 1
          ? { ...cart, quantity: cart.quantity - 1 }
          : cart
      )
    );
    updateSelectedProductQuantity(cartId, -1);
  };

  const handleIncreaseQuantity = (cartId) => {
    setCartDataList((prevCarts) =>
      prevCarts.map((cart) =>
        cart._id === cartId ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
    updateSelectedProductQuantity(cartId, 1);
  };

  const handleProductSelect = (cartId, checked) => {
    if (checked) {
      const selectedCart = cartDataList?.find((cart) => cart._id === cartId);
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

  // const getCartData = () => {
  //   fetch(`http://localhost:5000/cart?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setCartDataList(data))
  //     .finally(() => setIsLoading(false));
  // };

  const handleDelete = (cart) => {
    // console.log(cart);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        fetch(`http://localhost:5000/cart/${cart._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              getCartListData();
              console.log("Inner Function");
              Swal.fire({
                title: `${cart?.product_name}`,
                text: "Deleted Successfully",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK !",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      getCartListData();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Kosi Furniture || My Cart</title>
      </Helmet>
      <h2 className="text-center text-2xl font-bold mt-10 text-[#cd8f5c]">
        My Cart information
      </h2>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 ">
          {/* left product details */}
          <div className="lg:col-span-2 ">
            {cartDataList?.map((cart) => (
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
                  {/* price & quantity are visible small device and hidden on large device */}
                  <div className="grid lg:hidden mt-2">
                    <div className="flex h-7 mt-2 ">
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
                      <p className="font-bold mt-3">
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
                  {/* delete and wishlist icon */}
                  <div className="flex gap-3  justify-end mt-20">
                    <button>
                      <AiOutlineHeart className="h-6 w-6 hover:text-[#cd8f5c]" />
                    </button>
                    <button onClick={() => handleDelete(cart)}>
                      <AiOutlineDelete className="h-6 w-6 hover:text-[#cd8f5c]" />
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
