import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ShoeList from "./components/ShoeList";
import { CartState } from "./components/CartContext";

const App = () => {
  return (
    <div className="App">
      <CartState>
        <Navigation />
        <ShoeList />
      </CartState>
    </div>
  );
};

export default App;
