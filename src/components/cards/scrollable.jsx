import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./moviecards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Scrollable = () => {
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/movies/mystery")
      .then((response) => response.json())
      .then((data) => {
        setMovieArr(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieArr.map((d) => (
          <div key={d.id} className="movie-poster">
            <img src={d.posterURL} alt="movie poster" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Scrollable;
