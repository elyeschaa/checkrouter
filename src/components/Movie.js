import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Movie = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "32px auto",
        flexWrap: "wrap",
        width: "60%",
      }}
    >
      {movies.map((movie) => {
        return (
          <Link to={`/MovieDescription/${movie.id}`}>
            <div
              key={movie.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img src={movie.img} height={220} width={180} />
              <h5>{movie.name}</h5>
              <ReactStars
                count={5}
                size={24}
                isHalf={false}
                edit={false}
                value={movie.rating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Movie;
