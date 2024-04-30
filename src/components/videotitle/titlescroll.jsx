import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./moviecards.css";

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Scrollable = () => {

  return (
    <>
    <div className="slider-container">
      <div className="slider-main">
        {currentItems.map((d, index) => (
          <div key={d.id} className="movie-poster">
            <img src={d.posterURL} alt="movie poster" />               
          </div>
        ))}
      </div>

    <div className="pagination-button1 ">
      <button className="border-button" onClick={handlePrevPage} disabled={currentPage === 0}>
      <FontAwesomeIcon icon={faChevronLeft} /> 
      </button>
    </div>

    <div className="pagination-button2  ">
      <button
        className="border-button"
        onClick={handleNextPage}
        disabled={indexOfLastItem >= movieArr.length}
      >
        <FontAwesomeIcon icon={faChevronRight} /> 
      </button>
    </div>
  </div>
  </>         
      
    
  );
};

export default Scrollable;

