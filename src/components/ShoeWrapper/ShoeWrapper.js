/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Container from "../GlobalComponents/Container";
import SearchForm from "../SearchForm/SearchForm";
import ShoeCard from './ShoeCard';

const ShoeWrapper = ({shoeData}) => {
  return(
    <section css={styles} className="shoeWrapper">
      <Container>
        <SearchForm />
        <ShoeCard shoeData={shoeData}/>
      </Container>
    </section>
  )
}

const styles = css`
  width: 100%;
  .container {
    padding: 40px 0;
  }
`

export default ShoeWrapper;