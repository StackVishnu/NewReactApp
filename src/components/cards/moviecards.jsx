import React, { useEffect, useState } from "react";
import "./moviecards.css";
import Scrollable from "./scrollable.jsx";

const apiUrl = "https://api.sampleapis.com/movies/mystery";
const MovieCards = () => {
  return (
    <div className="movie-cards" id="movie-cards">
      <div className="genre-text">
        <h5>Mystery</h5>
      </div>

      <div className="movie-grid">
        <Scrollable  apiUrl="https://api.sampleapis.com/movies/mystery"/>
      </div>
      <div className="genre-text">
        <h5>Family</h5>
      </div>

      <div className="movie-grid">
        <Scrollable  apiUrl="https://api.sampleapis.com/movies/family"/>
      </div>
      <div className="genre-text">
        <h5>Comedy</h5>
      </div>

      <div className="movie-grid">
        <Scrollable  apiUrl="https://api.sampleapis.com/movies/comedy"/>
      </div>
      
    </div>
  );
};

export default MovieCards;
