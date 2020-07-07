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
`;

export default ShoeList;
