import React from "react";
import "./MovieDate.css";

function MovieDate({ movie }) {
  return (
    <div className={`date ${movie.active ? "active" : undefined}`}>
      <h2> Em {movie.date}</h2>
    </div>
  );
}

export default MovieDate;
