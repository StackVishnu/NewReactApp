import React, { useState, useEffect } from "react";
import VideoPlayer from "./videoplayer";
import VideoTitle from "../videotitle/videotitle";
import MovieCards from "../cards/moviecards";
import Footer from "../footer/footer"
import "./mainpage.css";

function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const[showImage,setShowImage] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight / 2); 
    };

    const timer = setTimeout(()=>{
      setShowImage(false)
    },3000)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className='scroll-container'>
          <VideoPlayer showImage={showImage} isScrolled={isScrolled} selectedImage={selectedImage}/>
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