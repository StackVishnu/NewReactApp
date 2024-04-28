import video from "../../assets/avengers.webm";
import VideoTitle from "../videotitle/videotitle";
import "./mainpage.css";
import MovieCards from "../cards/moviecards";
function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="video-player">
          <video src={video} autoPlay loop muted type="video/mp4"></video>
          <VideoTitle />
        </div>
      </div>
      <div className="card-row">
        <MovieCards />
      </div>
    </>
  );
}
export default MainPage;
