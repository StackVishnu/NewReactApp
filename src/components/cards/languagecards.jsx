import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import languageData from "./langdata";
import "./moviecards.css";
import "./languagecards.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const LangScroll = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(languageData.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = languageData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="slider-container">
        <div className="pagination-button2 ">
          <button
            className="border-button3"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="border-button4"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= languageData.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="slider-main">
          {currentItems.map((d, index) => (
            <div key={index} className="lang-poster">
              <img src={d.img} alt="lang poster" />
            </div>
          ))}
        </div>

        {/* <div className="pagination-button1">
          <button
            className="border-button"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        <div className="pagination-button2">
          <button
            className="border-button"
            onClick={handleNextPage}
            disabled={indexOfLastItem >= languageData.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div> */}
      </div>
    </>
  );
};

export default LangScroll;
