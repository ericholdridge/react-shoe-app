/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Shoe from "./Shoe";
import Container from "../components/GlobalComponents/Container";

import NikeCleat from "../Images/nikeCleat.jpg";
import NikeMercurialCleat from "../Images/nikeMercurialCleat.jpg";
import flyknitRacer from "../Images/flyknitRacer.jpg";
import NikeStrap from "../Images/nikeStrap.jpg";

const ShoeList = () => {
  const database = [
    {
      image: NikeCleat,
      title: "Nike Cleat 1",
      size: [8, 9, 10, 11, 12],
      price: "199.99",
    },
    {
      image: NikeMercurialCleat,
      title: "Nike Cleat 2",
      Size: [8, 9, 10, 11, 12],
      price: "199.99",
    },
    {
      image: flyknitRacer,
      title: "Nike Flyknit Racer",
      size: [8, 9, 10, 11, 12],
      price: "120.99",
    },
    {
      image: NikeStrap,
      title: "Nike Flyknit Racer",
      size: [8, 9, 10, 11, 12],
      price: "120.99",
    },
  ];

  return (
    <div css={styles}>
      <Container>
        {database.map((shoe) => (
          <Shoe image={shoe.image} title={shoe.title} price={shoe.price} />
        ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default ShoeList;
