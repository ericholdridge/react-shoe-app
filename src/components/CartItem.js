/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CartItem = ({ img, title, price, size }) => {
  return (
    <div className="cartItem" css={styles}>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="shoeInfo">
        <h3 className="shoeTitle">{title}</h3>
        <p>Price: ${price}</p>
        <span>Size: {size}</span>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: -3px 7px 28px -14px rgba(0, 0, 0, 0.75);
  margin: 0 0 10px 0;
  .img {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .shoeInfo {
    width: 100%;
    text-align: center;
    padding: 0 0 10px 0;
  }
`;

export default CartItem;
