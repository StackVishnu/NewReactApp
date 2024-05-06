import React, { useEffect, useRef, useState } from "react";
import "./moviecards.css";
import Scrollable from "./scrollable.jsx";

const GenreMovies = ({ genre, apiUrl }) => {
  return (
    <div className="genre-container">
      <div className="genre-text">
        <h5>{genre}</h5>
      </div>
      <div className="movie-grid">
        <Scrollable apiUrl={apiUrl} />
      </div>
    </div>
  );
};

const MovieCards = () => {
  const [genres, setGenres] = useState([
    { name: "Mystery", apiUrl: "https://api.sampleapis.com/movies/mystery" },
    { name: "Family", apiUrl: "https://api.sampleapis.com/movies/family" },
    { name: "Comedy", apiUrl: "https://api.sampleapis.com/movies/comedy" },

  ]);

  const bottomBoundaryRef = useRef(null);
  const maxValue = 6;
  const loadMoreGenres = () => {
    if (genres.length < maxValue) {
      setTimeout(() => {
        setGenres((prevGenres) => [
          ...prevGenres,
          { name: "Drama", apiUrl: "https://api.sampleapis.com/movies/drama" },
          { name: "Horror", apiUrl: "https://api.sampleapis.com/movies/horror" },
          { name: "Western", apiUrl: "https://api.sampleapis.com/movies/western" },
          { name: "Animation", apiUrl: "https://api.sampleapis.com/movies/animation" },
          { name: "Classic", apiUrl: "https://api.sampleapis.com/movies/classic" }
          
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          loadMoreGenres();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(bottomBoundaryRef.current);

    return () => {
      observer.disconnect();
    };
  }, [genres]);

  return (
    <div className="movie-cards" id="movie-cards">
      {genres.map((genre, index) => (
        <GenreMovies key={index} genre={genre.name} apiUrl={genre.apiUrl} />
      ))}
      <div ref={bottomBoundaryRef}></div>
    </div>
  );
};

export default MovieCards;
