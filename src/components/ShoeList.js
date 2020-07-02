/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Shoe from "./Shoe";
import Container from "../components/GlobalComponents/Container";

// Images
import Shoe1 from "../Images/shoe1.png";
import Shoe2 from "../Images/shoe2.png";
import Shoe3 from "../Images/shoe3.png";
import Shoe4 from "../Images/shoe4.png";
import Shoe5 from "../Images/shoe5.png";
import Shoe6 from "../Images/shoe6.png";

const ShoeList = () => {
  const database = [
    {
      image: Shoe1,
      title: "Nike Cleat 1",
      size: [8, 9, 10, 11, 12],
      price: 199.99,
    },
    {
      image: Shoe2,
      title: "Nike Cleat 2",
      size: [8, 9, 10, 11, 12],
      price: 199.99,
    },
    {
      image: Shoe3,
      title: "Nike Flyknit Racer",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
    {
      image: Shoe4,
      title: "Nike Flyknit Racer",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
    {
      image: Shoe5,
      title: "Nike Flyknit Racer",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
    {
      image: Shoe6,
      title: "Nike Flyknit Racer",
      size: [8, 9, 10, 11, 12],
      price: 120.99,
    },
  ];

  return (
    <div css={styles}>
      <Container>
        {database.map((shoe) => (
          <Shoe image={shoe.image} title={shoe.title} price={shoe.price} size={shoe.size} />
        ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export default ShoeList;
