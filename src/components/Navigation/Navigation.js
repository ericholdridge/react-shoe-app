/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Container from "../GlobalComponents/Container";

const Navigation = () => {
  return(
    <nav css={styles}>
      <Container>
        <div className="logo">shoeGOD</div>
        <div className="cart"><i className="fas fa-shopping-cart fa-lg"></i></div>
      </Container>
    </nav>
  )
}

const styles = css`
  width: 100%;
  padding: 30px 0;
  background: #000;
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