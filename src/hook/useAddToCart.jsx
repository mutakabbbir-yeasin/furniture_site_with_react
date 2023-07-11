import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "./useCart";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";

const useAddToCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { getCartListData } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = (product) => {
    console.log(product);
    if (user && user.email) {
      setLoading(true);
      const {
        _id,
        images_link,
        product_name,
        brand_name,
        available,
        short_description,
        price,
        quantity,
      } = product;
      const cartProduct = {
        productId: _id,
        images_link,
        product_name,
        brand_name,
        available: available,
        short_description,
        price,
        email: user.email,
        quantity: quantity,
      };
      // console.log(product);
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            Swal.fire({
              title: "This product already added",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
            });
          } else {
            getCartListData();
            setLoading(false);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product added to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to add a product to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Plesase",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return { loading, handleAddToCart };
};

export default useAddToCart;
