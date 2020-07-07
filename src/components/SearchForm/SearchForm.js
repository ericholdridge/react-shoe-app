/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";

const SearchForm = () => {
  const {
    search,
    setSearch,
    database,
    setDatabase,
    searchResults,
    setSearchResults,
  } = useContext(CartContext);

  useEffect(() => {
    const results = database.filter((shoeTitle) => {
      return shoeTitle.title.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(results);
  }, [search]);

  return (
    <form action="" css={styles}>
      <input
        type="text"
        placeholder="Search Shoes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

const styles = css`
  width: 100%;
  max-width: 400px;
  height: 40px;
  input {
    width: 400px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 6px;
    outline: none;
  }
`;
export default SearchForm;
