/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ATCButton from "../GlobalComponents/ATCButton";

const ShoeCard = ({shoeData}) => {
  return(
    <div css={styles} className="shoeCard">
      {
        shoeData.map((shoe, index) => {
        return <div className="shoe" key={index}>
                  <img src={shoe.shoeImage} alt=""/>
                  <h3>{shoe.shoeTitle}</h3>
                  <div className="shoeSize">
                    {shoe.shoeSize.map(size => {
                      return <span>{size}</span>
                    })}
                  </div>
                  <span>${shoe.price}</span>
                  <ATCButton />
                </div>
        })
      }
    </div>
  )
}

const styles = css`
  width: 100%;
  display: flex;
  padding: 20px 0 0 0;
  justify-content: space-between;
  flex-wrap: wrap;
  /* border: 1px solid green; */
  .shoe {
    width: 100%;
    max-width: 320px;
    margin: 0 0 40px 0;
    /* background: #f5f5f5; */
    img {
      display: block;
      width: 100%;
    }
    h3 {
      font-size: 1.2rem;

    }
    .shoeSize {
      display: flex;
      span {
        margin: 0 10px;
        cursor: pointer;
        border: 1px solid #ccc;
        padding: 2px 6px;
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
  }
`

export default ShoeCard;