import React, { useState } from "react";
import Slider from "react-slick";
import img2 from "../../assets/civil_war.jpeg";
import img3 from "../../assets/infinity.jpeg";
import img4 from "../../assets/endgame.jpeg";
import avngrs2 from "../../assets/age_of_ultron.png";
import titleCard from "../../assets/avengers.png";
import poster1 from "../../assets/avengers_poster.webp";
import poster2 from "../../assets/ultron_poster.webp";
import video1 from "../../assets/avengers.webm";
import video2 from "../../assets/ultron.webm";
// import vid1 from "../../assets/avengers.webm"
import "./titlescroll.css";

function MultipleItems({ setSelectedImage }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };

  const defaultData = {
    titleImage: titleCard,
    movieSpecs: "2012 • 2h24m • 4 languages",
    descriptionText:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genres: "Superhero | Action | Dark Humour",
    ageRestriction: "U/A 16+",
    posterImg: poster1,
    posterVid: video1,
  };
  const imageData = {
    titleImage: avngrs2,
    movieSpecs: "2016 • 2h21m • 4 languages",
    descriptionText:
      "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
    genres: "Superhero | Action | Dark Humour | Sci-Fi",
    ageRestriction: "U/A 16+",
    posterImg: poster2,
    posterVid: video2,
  };
  return (
    <div className="slider-container3">
      <Slider {...settings}>
        <div className="title-scroll-container">
          <img
            src="https://image.tmdb.org/t/p/original/yHdPTs239Cqce1s6y9figbeolR1.jpg"
            alt=""
            onClick={() => setSelectedImage(defaultData)}
          />
        </div>
        <div className="title-scroll-container">
          <img
            src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/03/IMG_1741.jpeg"
            alt=""
            onClick={() => setSelectedImage(imageData)}
          />
        </div>
        <div className="title-scroll-container">
          <img src={img2} alt="civilwar" />
        </div>
        <div className="title-scroll-container">
          <img src={img3} alt="" />
        </div>
        <div className="title-scroll-container">
          <img src={img4} alt="" />
        </div>
        <div className="title-scroll-container">
          <img
            src="https://image.tmdb.org/t/p/original/yHdPTs239Cqce1s6y9figbeolR1.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
