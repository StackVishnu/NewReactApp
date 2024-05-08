import React, { useState, useEffect } from "react";
import { useGenre } from "../../contexts/genrecontexts";
import GenreMovie from "./detailedscroll";
import VideoPlayer from "../mainpage/videoplayer";
import VideoTitle from "../videotitle/videotitle";
import "../mainpage/mainpage.css";

function DetailedView() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollOpacity, setScrollOpacity] = useState(1); // State for scroll opacity
  const { genreText } = useGenre();
  console.log(genreText);
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

  return (
    <>
      <div
        className="video-player-container"
        style={{ opacity: scrollOpacity }}
      >
        <VideoPlayer
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <div className="scroll-container">
        <div className="video-title">
          <VideoTitle
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
        <div className={`card-row`}>
          <GenreMovie />
        </div>
      </div>
    </>
  );
}

export default DetailedView;
