import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import titleCard from "../../assets/avengers.png";
import MultipleItems from "./titlescroll";
import "./videotitle.css";

function VideoTitle({ selectedImage, setSelectedImage, shouldRender }) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);

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
      selectedImage || defaultData;

    return (
      <div className="video-title" style={{ opacity: showComponent ? 1 : 0 }}>
        <div className="title">
          <img
            src={selectedImage?.posterURL || titleImage}
            alt="image"
            className="title-card"
          />
          <h4 className="movie-specs">
            {movieSpecs}
            <span className="dot"></span>
            <button className="age-restriction">{ageRestriction}</button>
          </h4>
        </div>
        <div className="description">
          <div className="description-text">
            <p>{selectedImage?.title || descriptionText}</p>
            <h4>{genres}</h4>
          </div>
          <div className="subscribe-button">
            <button className="button-4" role="button">
              <FontAwesomeIcon
                icon={faPlay}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
              Subscribe to Watch
            </button>
            <button className="button-5" role="button">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
            </button>
            <div>
              <div>
                {shouldRender && (
                  <MultipleItems setSelectedImage={setSelectedImage} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return renderVideoTitle();
}

export default VideoTitle;
