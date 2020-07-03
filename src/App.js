/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ShoeList from "./components/ShoeList";
import { CartState } from "./components/CartContext";
import CartItems from "./components/CartItems";

const App = () => {
  return (
    <div className="App" css={styles}>
      <CartState>
        <ShoeList />
        <CartItems />
      </CartState>
    </div>
  );
};

const styles = css`
  position: relative;
`

export default App;
