import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../contexts/favouritecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./favoritelist.css";

const Scrollable2 = ({ favorites, handleClose }) => {
  const navigate = useNavigate();
  const [isGold, setIsGold] = useState(false);
  const { addFavorite, removeFavorite, isInFavorites } = useFavorites();
  const [movies, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 3;

  const fetchMovieData = async (id, genre) => {
    try {
      const response = await fetch(
        `https://api.sampleapis.com/movies/${genre}/${id}`
      );
      const data = await response.json();
      return { ...data, genre };
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await Promise.all(
          favorites.map(async (movie) => {
            const { id, genre } = movie;
            const movieData = await fetchMovieData(id, genre);
            return movieData;
          })
        );
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [favorites]);

  const handleNavigation = (id, genre) => {
    navigate(`/detailed-view/${id}/${genre}`);
  };

  const toggleFavorite = (id, title, genre) => {
    if (isInFavorites(title)) {
      removeFavorite(title);
    } else {
      addFavorite(id, genre, title);
    }
    setIsGold(!isGold);
  };

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const currentRender = () => {
    const startIndex = currentPage * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    return (
      <>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            translateX: -5,
          }}
          className="prev-page-button page-buttons"
          onClick={handlePrevPage}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ paddingRight: "1rem" }}
          />
        </motion.button>
        {/* <Slider {...settings}> */}
        {movies.slice(startIndex, endIndex).map((d, index) => (
          <div key={d.id} className="movie-poster">
            <img src={d.posterURL} alt="movie poster" />
            <div className="extended">
              <img src={d.posterURL} alt="movie-poster" />
              <div className="extended-buttons">
                <button
                  className="extended-button1"
                  onClick={() => {
                    handleNavigation(d.id, d.genre);
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    style={{ color: "black", marginRight: "0.1rem" }}
                  />
                  Watch Now
                </button>

                <motion.button
                  className="extended-button2"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(d.id, d.title, d.genre)}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    className="favourite-icon"
                    style={{
                      border: "none",
                      color: isInFavorites(d.title) ? "gold" : "white",
                    }}
                  />
                </motion.button>
              </div>
              <div className="extended-description">
                <p>2012 • 2h24m • 4 languages</p>
                <h4>{d.title}</h4>
              </div>
            </div>
          </div>
        ))}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            translateX: 5,
          }}
          className="next-page-button page-buttons"
          onClick={handleNextPage}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ paddingRight: "1rem" }}
          />
        </motion.button>
        {/* </Slider> */}
      </>
    );
  };
  return currentRender();
};

export default Scrollable2;
