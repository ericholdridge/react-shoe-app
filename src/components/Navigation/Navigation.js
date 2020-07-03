/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Container from "../GlobalComponents/Container";
import SearchForm from "../SearchForm/SearchForm";
import Cart from "../Cart";

const Navigation = () => {
  return(
    <nav css={styles}>
      <Container>
        <div className="logo">$hoeApp</div>
        <SearchForm />
        <Cart />
      </Container>
    </nav>
  )
}

const styles = css`
  width: 100%;
  padding: 20px 0;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .logo {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
`

export default Navigation;