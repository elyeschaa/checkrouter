import Movie from "./Movie";
import React, { useState, useEffect } from "react";

const Moviecontainer = ({ movies, input, rating }) => {
  const [filtredMovies, setFiltredMovies] = useState(movies);

  useEffect(() => {
    setFiltredMovies(
      movies.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(input.toLowerCase()) &&
          movie.rating >= rating
        );
      })
    );
  }, [input, rating, movies]);

  return <Movie movies={filtredMovies} />;
};

export default Moviecontainer;
