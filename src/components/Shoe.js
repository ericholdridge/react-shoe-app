/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Shoe = ({ image, title, price, size }) => {
  const {cart, setCart} = useContext(CartContext);
  const [userShoeSize, setUserShoeSize] = useState();
  const [shoe, setShoe] = useState({
    image: image,
    title: title,
    price: price,
  });

  const addToCart = () => {
    shoe.size = userShoeSize
    setCart((currentState) => [...currentState, shoe]);
  };

  return (
    <div css={styles} className="shoe">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="shoeInfo">
        <h2>{title}</h2>
        <div className="shoeSize">
          {size.map((shoeSize, index) => (
            <p onClick={() => setUserShoeSize(shoeSize)} key={index}>
              {shoeSize}
            </p>
          ))}
        </div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 340px;
  -webkit-box-shadow: -3px 7px 28px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 7px 28px -14px rgba(0, 0, 0, 0.75);
  box-shadow: -3px 7px 28px -14px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  margin: 0 0 40px 0;
  padding: 0 0 30px 0;
  .img {
    height: 290px;
    width: 290px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  button {
    display: block;
    margin: 0 auto;
    background: black;
    padding: 8px 14px;
    border: 1px solid black;
    outline: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  .shoeInfo {
    text-align: center;
    .shoeSize {
      padding: 14px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        height: 32px;
        width: 32px;
        border: 1px solid #000;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 6px;
        transition: background 600ms, color 600ms;
        &:hover {
          background: #000;
          color: #fff;
        }
        &:active {
          background: #000;
          color: #fff;
        }
      }
    }
    span {
      display: block;
      padding: 10px 0;
    }
  }
`;

export default Shoe;
