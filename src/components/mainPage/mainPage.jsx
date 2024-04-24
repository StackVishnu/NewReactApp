import video from "../../assets/Reel Teaser videos _ Teaser Template.mp4";
function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="video-player">
          <video src={video} autoPlay loop type="video/mp4"></video>
        </div>
      </div>
    </>
  );
}
export default MainPage;
