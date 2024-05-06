import React, { useState, useEffect } from "react";
import video from "../../assets/avengers.webm";
import VideoTitle from "../videotitle/videotitle";
import MovieCards from "../cards/moviecards";
import Footer from "../footer/footer"
import "./mainpage.css";

function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight / 2); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className='scroll-container'>
        <div className='video-player'>
          <video src={video} autoPlay loop muted type="video/mp4" className={`main-video ${isScrolled ? "scrolled" : ""}`}></video>
        </div>
        <div className="video-title">
          <VideoTitle selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </div>
        <div className={`card-row ${isScrolled ? "scrolled" : ""}`}>
        <MovieCards setSelectedImage={setSelectedImage} isScrolled={isScrolled} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;