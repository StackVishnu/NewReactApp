

import React from "react";
import specialCardsData from "./spcldata";
import "./specialcards.css";

function SpecialCards() {
  return (
    <>
      <div className="slider-container2">
        <div className="slider-main2">
          {specialCardsData.map((d, index) => (
            <div key={index} className="movie-poster2">
              <img src={d.img} alt={`${d.brand} movie poster`} />
              <video src={d.vid} autoPlay muted loop></video>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpecialCards;
