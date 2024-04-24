import video from "../../assets/avengers.webm";
import VideoTitle from "../videotitle/videotitle";
import './mainpage.css'
function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="video-player">
          <video src={video} autoPlay loop muted type="video/mp4"></video>
          <VideoTitle/>
        </div>
      </div>
    </>
  );
}
export default MainPage;
