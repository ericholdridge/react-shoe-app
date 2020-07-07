import React, { createContext, useState } from "react";

// Images
import Shoe1 from "../Images/shoe1.png";
import Shoe2 from "../Images/shoe2.png";
import Shoe3 from "../Images/shoe3.png";
import Shoe4 from "../Images/shoe4.png";
import Shoe5 from "../Images/shoe5.png";
import Shoe6 from "../Images/shoe6.png";

export const CartContext = createContext();
export const CartState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [database, setDatabase] = useState([
    {
      image: Shoe1,
      title: "Item1",
      size: [8, 9, 10, 11, 12],
      price: 199.99,
    },
    {
      image: Shoe2,
      title: "Item2",
      size: [8, 9, 10, 11, 12],
      price: 199.99,
    },
    {
      image: Shoe3,
      title: "Item3",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
    {
      image: Shoe4,
      title: "Item4",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
    {
      image: Shoe5,
      title: "Item5",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
    {
      image: Shoe6,
      title: "Item6",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
  ]);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        showCart,
        setShowCart,
        search,
        setSearch,
        database,
        setDatabase,
        searchResults,
        setSearchResults
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
