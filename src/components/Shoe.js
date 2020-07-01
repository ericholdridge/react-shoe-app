/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, {useContext} from 'react';
import { CartContext } from "./CartContext";

const Shoe = ({ image, title, price }) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const shoe = {image: image, title: title, price: price};
    setCart(currentState => [...currentState, shoe])
  };

  return (
    <div css={styles}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <span>{price}</span>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 380px;
  button {
    display: block;
  }
`

export default Shoe;
