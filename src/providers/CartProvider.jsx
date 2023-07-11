import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [cartDataList, setCartDataList] = useState([]);

  const contextValue = { cartDataList, setCartDataList };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartProvider;
