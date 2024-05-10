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

import "./moviecards.css";

const Scrollable = ({ apiUrl }) => {
  const navigate = useNavigate();
  const [isGold, setIsGold] = useState(false);
  const { addFavorite, removeFavorite, isInFavorites } = useFavorites();

  const [movieArr, setMovieArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieArr(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredMovieArr = movieArr.filter((item) => {
    const img = new Image();
    img.src = item.posterURL;
    return img.complete;
  });
  const currentItems = filteredMovieArr.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handleNavigation = (id, apiUrl) => {
    const genre = apiUrl.split("/").pop();
    navigate(`/detailed-view/${id}/${genre}`);
  };
  const toggleFavorite = (id, title) => {
    if (isInFavorites(title)) {
      removeFavorite(title);
    } else {
      addFavorite(id, apiUrl.split("/").pop(), title);
    }
    setIsGold(!isGold);
  };

  // console.log(genreText);
  return (
    <>
      <div className="slider-container">
        <div className="pagination-button ">
          <button
            className="border-button1"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ paddingRight: "1rem" }}
            />
          </button>
          <button
            className="border-button2"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= movieArr.length}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ paddingLeft: "1rem" }}
            />
          </button>
        </div>
        <div className="slider-main">
          {currentItems.map((d, index) => (
            <div key={d.id} className="movie-poster">
              <img src={d.posterURL} alt="movie poster" />

              <div className="extended">
                <img src={d.posterURL} alt="movie-poster" />
                <div className="extended-buttons">
                  <button
                    className="extended-button1"
                    onClick={() => handleNavigation(d.id, apiUrl)}
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
                    onClick={() => toggleFavorite(d.id, d.title)}
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
        </div>

        {/* <div className="pagination-button ">
          <button
            className="border-button"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="border-button"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= movieArr.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div> */}

        {/* <div className="pagination-button  ">
          <button
            className="border-button"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= movieArr.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Scrollable;
