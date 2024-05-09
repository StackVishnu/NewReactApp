import React, { useEffect, useRef, useState } from "react";
import Scrollable from "../cards/scrollable.jsx";
import "../cards/moviecards.css";
import "./detailedscroll.css";

const GenreMovie = () => {
  return (
    <>
      <div className="similar-text">
        <h5>More Like This</h5>
        <h5>Trailers & More</h5>
      </div>
      <div className="horizontal-line"></div>
      <div className="genre-container">
        <div className="genre-text">
          <h5>{"More Like This"}</h5>
        </div>
        <div className="movie-grid">
          <Scrollable apiUrl={"https://api.sampleapis.com/movies/mystery"} />
        </div>
        <div className="padding"></div>
      </div>
    </>
  );
};
export default GenreMovie;
