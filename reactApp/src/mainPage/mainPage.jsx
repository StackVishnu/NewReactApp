import video from "../assets/AAVESHAM _ The Talent Teaser _ Jithu Madhavan _ Fahadh Faasil _ Sushin Shyam.mp4";
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
