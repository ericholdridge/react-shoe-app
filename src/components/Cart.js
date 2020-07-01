/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "./GlobalComponents/Container";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <Container>
      <div css={styles}>
        <span>Cart: {cart.length}</span>
        <span>Price:</span>
      </div>
    </Container>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Cart;
