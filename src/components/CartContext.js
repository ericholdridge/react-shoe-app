import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartState = ({ children }) => {
  const [cart, setCart] = useState([]);
  return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>;
};
