import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SearchForm from "./components/SearchForm/SearchForm";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";
import { CartState } from "./components/CartContext";

const App = () => {
  return (
    <div className="App">
      <CartState>
        <Navigation />
        <Cart />
        <SearchForm />
        <ShoeList />
      </CartState>
    </div>
  );
};

export default App;
