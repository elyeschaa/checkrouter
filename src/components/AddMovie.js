import { Modal, Button } from "react-bootstrap";

function AddMovie(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.handleModal}>
        <Modal.Title id="contained-modal-title-vcenter">Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          placeholder="Movie name"
          type="text"
          value={props.newMovie.name}
          name="name"
          onChange={props.handleAddMovie}
        />
        <input
          placeholder="Movie poster"
          type="text"
          value={props.newMovie.img}
          name="img"
          onChange={props.handleAddMovie}
        />
        <input
          placeholder="Movie rating"
          type="number"
          value={props.newMovie.rating}
          name="rating"
          onChange={props.handleAddMovie}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleModal}>Close</Button>
        <Button onClick={props.addMovie} variant="success">
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMovie;
