import React, { useState } from "react";
import video from "../../assets/avengers.webm";
import VideoTitle from "../videotitle/videotitle";
import MovieCards from "../cards/moviecards";
import Footer from "../footer/footer"
import "./mainpage.css";

function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
        <div className="video-player">
          <video src={video} autoPlay loop muted type="video/mp4"></video>
        </div>
      <div className="scroll-container">
        <div className="video-title">
          <VideoTitle selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </div>
        <div className="card-row">
          <MovieCards setSelectedImage={setSelectedImage} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default MainPage;