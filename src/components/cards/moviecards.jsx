import React, { useEffect, useRef, useState } from "react";
import Scrollable from "./scrollable.jsx";
import SpclCards from "./specialcards.jsx"; 
import LangScroll from "./languagecards.jsx";
import "./moviecards.css";

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

const MovieCards = ({ isScrolled }) => {
  const [genres, setGenres] = useState([
    { name: "Mystery", apiUrl: "https://api.sampleapis.com/movies/mystery" },
    { name: "Family", apiUrl: "https://api.sampleapis.com/movies/family" },
    { name: "Comedy", apiUrl: "https://api.sampleapis.com/movies/comedy" },
  ]);
  const [specialCardsRendered, setSpecialCardsRendered] = useState(false);

  const bottomBoundaryRef = useRef(null);
  const maxValue = 4;
  const loadMoreGenres = () => {
    if (genres.length < maxValue) {
      setTimeout(() => {
        setGenres((prevGenres) => [
          ...prevGenres,
          { name: "Drama", apiUrl: "https://api.sampleapis.com/movies/drama" },
          // { name: "Western", apiUrl: "https://api.sampleapis.com/movies/western" },
          // { name: "Animation", apiUrl: "https://api.sampleapis.com/movies/animation" },
          // { name: "Classic", apiUrl: "https://api.sampleapis.com/movies/classic" }
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

  useEffect(() => {
    if (genres.length > 3 && !specialCardsRendered) {
      setSpecialCardsRendered(true);
    }
  }, [genres, specialCardsRendered]);

  return (
    <div className={`movie-cards ${isScrolled ? "scrolled" : ""}`}>
      {genres.map((genre, index) => (
        <GenreMovies key={index} genre={genre.name} apiUrl={genre.apiUrl} />
      ))}
      <div className="movie-grid2">
        {specialCardsRendered && <SpclCards />}
        {specialCardsRendered && <div className="langcards">
          <h5 className="lang-text">Popular Languages</h5>
          <LangScroll /> </div>} 
      </div>
      <div className={`movie-cards ${isScrolled ? "scrolled" : ""}`}>
      <GenreMovies key={109} genre="Animation" apiUrl="https://api.sampleapis.com/movies/animation" />
      </div>
      <div ref={bottomBoundaryRef}></div>
    </div>
  );
};

export default MovieCards;
