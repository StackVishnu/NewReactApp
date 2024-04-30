import React, { useEffect, useState } from "react";
import "./moviecards.css";
import Scrollable from "./scrollable.jsx";


const MovieCards = () => {
  return (
    <div className="movie-cards" id="movie-cards">
      <div className="genre-text">
        <h5>Mystery</h5>
      </div>

      <div className="movie-grid">
        <Scrollable></Scrollable>
      </div>
    </div>
  );
};

export default MovieCards;
