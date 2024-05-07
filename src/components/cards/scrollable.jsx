import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./moviecards.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Scrollable = ({ apiUrl }) => {
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
  const currentItems = movieArr.slice(indexOfFirstItem, indexOfLastItem);

  const filteredItems = currentItems.filter((item) => item.posterURL);

  return (
    <>
      <div className="slider-container">
        <div className="pagination-button ">
          <button
            className="border-button1"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="border-button2"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= movieArr.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="slider-main">
          {filteredItems.map((d, index) => (
            <div key={d.id} className="movie-poster">
              <img src={d.posterURL} alt="movie poster" />
              <div className="extended">
                <img src={d.posterURL} alt="movie-poster" />
                <div className="extended-buttons">
                  <button className="extended-button1">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ color: "black", marginRight: "0.1rem" }}
                    />
                    Watch Now
                  </button>
                  <button className="extended-button2">+</button>
                </div>
                <div className="extended-description">
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
