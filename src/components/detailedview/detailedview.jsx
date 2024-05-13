import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GenreMovie from "./detailedscroll";
import VideoPlayer from "../mainpage/videoplayer";

import VideoTitle from "../videotitle/videotitle";
import "../mainpage/mainpage.css";

function DetailedView() {
  const shouldRender = false;
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollOpacity, setScrollOpacity] = useState(1); // State for scroll opacity
  const [movieData, setMovieData] = useState(null);
  const { id, genre } = useParams();
  // console.log(id, genre);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition / window.innerHeight) * 2; // Adjust factor as needed
      setScrollOpacity(opacity < 0 ? 0 : opacity); // Ensure opacity does not go below 0
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.sampleapis.com/movies/${genre}/${id}`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id, genre]);

  // const defaultData = {
  //   titleImage: movieData.posterURL,
  //   movieSpecs: "2012 • 2h24m • 4 languages",
  //   descriptionText:
  //     "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  //   genres: "Superhero | Action | Dark Humour",
  //   ageRestriction: "U/A 16+",
  //   posterImg: movieData.title,
  // };
  return (
    <>
      <div
        className="video-player-container"
        style={{ opacity: scrollOpacity }}
      >
        <VideoPlayer
          selectedImage={movieData}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <div className="scroll-container">
        <div className="video-title">
          <VideoTitle
            selectedImage={movieData}
            setSelectedImage={setSelectedImage}
            shouldRender={shouldRender}
          />
        </div>
        <div className={`card-row2`}>
          <GenreMovie />
        </div>
      </div>
    </>
  );
}

export default DetailedView;
