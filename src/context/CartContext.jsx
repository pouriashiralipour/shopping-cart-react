import { createContext, useReducer } from "react";

const initialState = () => {};
const reducer = () => {};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
