import video from "../../assets/avengers.webm";
import VideoTitle from "../videotitle/videotitle";
import "./mainpage.css";
import MovieCards from "../cards/moviecards";

function MainPage() {
  return (
    <>
      <div className="scroll-container">
        <div className="video-player">
          <video src={video} autoPlay loop muted type="video/mp4"></video>
        </div>
        <div className="video-title">
          <VideoTitle />
        </div>
        <div className="card-row">
          <MovieCards />
        </div>
      </div>
    </>
  );
}

export default MainPage;