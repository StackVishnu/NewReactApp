import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoPlayer from "./videoplayer";
import VideoTitle from "../videotitle/videotitle";
import MovieCards from "../cards/moviecards";
import "./mainpage.css";

function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollOpacity, setScrollOpacity] = useState(1); // State for scroll opacity

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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="video-player-container"
        style={{ opacity: scrollOpacity }}
      >
        <VideoPlayer
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="scroll-container"
      >
        <div className="video-title">
          <VideoTitle
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            shouldRender={true}
          />
        </div>
        <div className={`card-row`}>
          <MovieCards setSelectedImage={setSelectedImage} />
        </div>
      </motion.div>
    </>
  );
}

export default MainPage;
