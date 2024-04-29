import "./videotitle.css";
import titleCard from "../../assets/avengers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function VideoTitle() {
  return (
    <>
      <div className="title">
        <img src={titleCard} alt="image" className="title-card" />
        <h4 className="movie-specs">
          2012 <span className="dot"></span> 2h24m <span className="dot"></span> 4 languages <span className="dot"></span> U/A 16+
        </h4>
      </div>
      <div className="description">
        <div className="description-text">
          <p>
            Earth's mightiest heroes must come together and learn to fight as a
            team if they are going to stop the mischievous Loki and his alien
            army from enslaving humanity.
          </p>
          <h4>Superhero | Action | Dark Humour</h4>
        </div>
        <div className="subscribe-button">
          <button className="button-4" role="button">
            <FontAwesomeIcon
              icon={faPlay}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            Subscribe to Watch
          </button>

          <button className="button-5" role="button">
            <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </>
  );
}

export default VideoTitle;
