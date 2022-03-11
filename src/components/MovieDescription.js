import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const MovieDescription = ({ movies }) => {
  const [MovieDescription, setMovieDescription] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setMovieDescription(movies.find((Movie) => Movie.id === +id));
  }, []);

  return (
    <div>
      <h1>{MovieDescription.description} </h1>
      <ReactPlayer url={MovieDescription.trailer} />
    </div>
  );
};

export default MovieDescription;
