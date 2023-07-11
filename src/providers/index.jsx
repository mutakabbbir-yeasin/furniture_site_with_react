import AuthProvider from "./AuthProvider";
import CartProvider from "./CartProvider";

const AppContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default AppContextProvider;
