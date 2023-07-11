import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { CartContext } from "../providers/CartProvider";
import { useState } from "react";
import axios from "axios";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { setCartDataList } = useContext(CartContext);

  const getCartListData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/cart?email=${user?.email}`
      );
      if (data) {
        setCartDataList(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, getCartListData };
};

export default useCart;
