/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Container from "../components/GlobalComponents/Container";
import CartItem from "./CartItem";
import Cart from "./Cart";

const CartItems = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext);

  return (
    <div className={showCart ? "showCart" : ""} css={styles}>
      <Container>
        <Cart />
        <div className="cartWrapper">
          {cart.map((item) => (
            <CartItem
              img={item.image}
              title={item.title}
              size={item.size}
              price={item.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 450px;
  position: absolute;
  background: #ccc;
  top: 0;
  left: -600px;
  bottom: 0;
  background: #000;
  opacity: 0;
  transition: all 400ms ease-in-out;
  &.showCart {
    display: block;
    left: 0;
    opacity: 1;
  }
  .container {
    width: 100%;
    max-width: 400px;
    padding: 35px 0;
    .navIcon {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0 0 30px 0;
      margin: 0;
      i {
        cursor: pointer;
        color: #fff;
      }
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
    .cartWrapper {
      height: 100%;
      min-height: 1000px;
      max-height: 1000px;
      overflow: scroll;
    }
  }
  @media(max-width: 722px) {
    width: 80%;
    .container {
      width: 94%;
      .cart {
        max-width: 300px;
        margin: 0 auto;
      }
      .cartItem {
        max-width: 300px;
        margin: 0 auto 14px auto;
      }
    }
  }
`;

export default CartItems;
