import video from "../../assets/avengers.webm";
import "./mainpage.css";
function VideoPlayer({showImage, isScrolled}){

    return(
    <div className='video-player'>
    {showImage && <img src="../../assets/avengers_poster.webp" alt="" className="title-poster" />}
      <video src={video} autoPlay loop muted type="video/mp4" className={`main-video ${isScrolled ? "scrolled" : ""}`}></video>
    </div>

    )
}
export default VideoPlayer;