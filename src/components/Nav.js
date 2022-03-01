import { Navbar, Container, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Nav = ({ input, handleInput, rating, hanleRating, handleModal }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          React Bootstrap
        </Navbar.Brand>
        <input placeholder="search" value={input} onChange={handleInput} />
        <ReactStars
          count={5}
          size={24}
          value={rating}
          isHalf={false}
          onChange={hanleRating}
          edit={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <Button onClick={handleModal}>Add Movie</Button>
      </Container>
    </Navbar>
  );
};

export default Nav;
