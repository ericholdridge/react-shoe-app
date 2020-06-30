/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ATCButton = () => {
  return(
    <button css={styles}>Add to cart</button>
  )
}

const styles = css`
  display: block;
  padding: 10px 30px;
  border: none;
`

export default ATCButton