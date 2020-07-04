/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const {cart, setCart, showCart, setShowCart} = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const toggleShowHide = () => setShowCart(!showCart)

  return (
    <div css={styles} className="cart" onClick={toggleShowHide}>
      <span>
        <i className="fas fa-shopping-cart"></i>
        {cart.length}
      </span>
      <span>Price: ${totalPrice.toFixed(2)}</span>
    </div>
  );
};

const styles = css`
  padding: 10px 0px 10px 10px;
  display: flex;
  position: relative;
  cursor: pointer;
  > span {
    margin: 0 10px 0 0;
  }
`;

export default Cart;
