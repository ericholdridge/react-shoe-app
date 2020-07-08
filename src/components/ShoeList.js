/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Shoe from "./Shoe";
import Container from "../components/GlobalComponents/Container";

import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const ShoeList = () => {
  const {database, setDatabase, searchResults, setSearchResults} = useContext(CartContext)
  return (
    <div css={styles}>
      <Container>
        {searchResults.map((shoe, index) => (
          <Shoe key={index} image={shoe.image} title={shoe.title} price={shoe.price} size={shoe.size} />
        ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 82px);
  display: flex;
  align-items: center;
  position: relative;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media(max-width: 695px) {
    .container {
      justify-content: center;
      padding: 20px 0 0 0;
    }
  }

  @media(min-width: 696px) and (max-width: 730px) {
    .container {
      padding: 20px 0 0 0;
      .shoe {
        max-width: 320px;
      }
    }
  }

  @media(min-width: 731px) and (max-width: 1057px) {
    .container {
      padding: 20px 0 0 0;
      .shoe {
        max-width: 47%;
      }
    }
  }
  @media(min-width: 1058px) and (max-width: 1224px) {
    .container {
      padding: 20px 0 0 0;
      .shoe {
        max-width: 31%;
      }
    }
  }
`;

export default ShoeList;
