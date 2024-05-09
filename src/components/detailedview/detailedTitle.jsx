import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import titleCard from "../../assets/avengers.png";
import "../videotitle/videotitle.css";

function DetailedTitle({ selectedImage }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [selectedImage]);

  const renderVideoTitle = () => {
    const defaultData = {
      titleImage: titleCard,
      movieSpecs: "2012 • 2h24m • 4 languages",
      descriptionText:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      genres: "Superhero | Action | Dark Humour",
      ageRestriction: "U/A 16+",
      posterImg: "../../assets/avengers_poster.webp",
    };

    const { titleImage, movieSpecs, descriptionText, genres, ageRestriction } =
      defaultData;

    return (
      <>
        <div className={`title ${isAnimating ? "fade" : ""}`}>
          <img
            src={selectedImage?.posterURL || titleImage}
            alt="image"
            className="title-card"
          />
          <h4 className="movie-specs">
            {movieSpecs} <span className="dot"></span>{" "}
            <button className="age-restriction">{18}</button>
          </h4>
        </div>
        <div className={`description ${isAnimating ? "fade" : ""}`}>
          <div className="description-text">
            <p>{null}</p>
            <h4>{selectedImage?.title}</h4>
          </div>
          <div className="subscribe-button">
            <button className="button-4" role="button">
              <FontAwesomeIcon
                icon={faPlay}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />{" "}
              Subscribe to Watch
            </button>
            <button className="button-5" role="button">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
            </button>
            <div></div>
          </div>
        </div>
      </>
    );
  };

  return <div className="video-title">{renderVideoTitle()}</div>;
}

export default DetailedTitle;
