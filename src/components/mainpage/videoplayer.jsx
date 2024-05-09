import { useEffect, useRef, useState } from "react";
import video1 from "../../assets/avengers.webm";
import image from "../../assets/avengers_poster.webp";
import "./mainpage.css";
function VideoPlayer({ selectedImage }) {
  const vidRef = useRef(null);
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    setShowImage(true);
    console.log(selectedImage);
    if (vidRef.current) {
      vidRef.current.currentTime = 0;
      vidRef.current.play();
    }
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [selectedImage]);

  return (
    <div className="video-player">
      {showImage && (
        <img
          src={selectedImage?.posterURL || selectedImage?.posterImg || image}
          alt=""
          className="title-poster"
        />
      )}
      <video
        src={selectedImage?.posterVid || video1}
        ref={vidRef}
        autoPlay
        loop
        muted
        type="video/mp4"
        className="main-video"
      ></video>
    </div>
  );
}
export default VideoPlayer;
