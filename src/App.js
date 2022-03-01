import Nav from "./components/Nav";
import Moviecontainer from "./components/Moviecontainer";
import { useState } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);

  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    rating: 0,
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const hanleRating = (newRating) => {
    setRating(newRating);
  };
  const handleModal = () => {
    setShow(!show);
  };

  const handleAddMovie = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    handleModal();
  };

  return (
    <div className="App">
      <Nav
        input={input}
        handleInput={handleInput}
        rating={rating}
        hanleRating={hanleRating}
        handleModal={handleModal}
      />
      <Moviecontainer movies={movies} input={input} rating={rating} />
      <AddMovie
        show={show}
        handleModal={handleModal}
        newMovie={newMovie}
        handleAddMovie={handleAddMovie}
        addMovie={addMovie}
      />
    </div>
  );
}

export default App;
