/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";

const SearchForm = () => {
  return (
    <form action="" css={styles}>
      <input type="text" placeholder="Search Shoes" />
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
