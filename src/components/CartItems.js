/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Container from "../components/GlobalComponents/Container";
import CartItem from "./CartItem";
import Cart from "./Cart";


const CartItems = () => {
  const [cart, setCart] = useContext(CartContext);
  const [showCart, setShowCart] = useState(false)
  return (
    <div className={showCart ?  'showCart' :  'hideCart'}css={styles}>
      <Container>
      <i class="fas fa-bars fa-lg" onClick={() => setShowCart(!false)}></i>
        {/* Display the items in the cart */}
        <Cart />
        {cart.map((item) => (
          <CartItem img={item.image} title={item.title} size={item.size} price={item.price}/>
        ))}
      </Container>
    </div>
  );
};

const styles = css`
    width: 20%;
    position: absolute;
    background: #ccc;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
  .container {
    max-width: 300px;
    height: 400px;
    i {
      margin: 20px 0;
      cursor: pointer;
    }
    .cart {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: block;
        color: #fff;
      }
    }
  }
}
`;

export default CartItems;
