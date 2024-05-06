import disneyImg from "../../assets/brand_images/viewers-disney.png";
import disneyVid from "../../assets/brand_videos/disney_b.mp4";
import "./specialcards.css";

function SpclCards() {
  const arr = [{ img: disneyImg, vid: disneyVid }];

  return (
    <>
      <div className="slider-container2">
        <div className="slider-main2">
          {arr.map((d, index) => (
            <div key={index} className="movie-poster2">
              <img src={d.img} alt="movie poster" />
              <video src={d.vid} autoPlay muted loop></video>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpclCards;