import "./NavBar.css";
import first from "../../assets/account_circle_FILL0_wght300_GRAD0_opsz24.svg";
import logo from "../../assets/logo_icon.svg";
import search from "../../assets/search_icon.svg";
import home from "../../assets/home_icon.svg";
import tv from "../../assets/tv_icon.svg";
import movie from "../../assets/movie_icon.svg";
import sports from "../../assets/sport_icon.svg";
import category from "../../assets/category_icon.svg";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} className="disney" alt="" />
          <button className="subscribe-logo">subscribe </button>
        </div>
        <div className="navbar-icon-container">
          <ul>
            <li>
              <div className="icon-container">
                <img src={first} className="navbar-icons" alt="icon" />
                <span className="link-text">My Space</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img src={search} className="navbar-icons" alt="icon" />
                <span className="link-text">Search</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img src={home} className="navbar-icons" alt="icon" />
                <span className="link-text">Home</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img src={tv} className="navbar-icons" alt="icon" />
                <span className="link-text">TV</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img src={movie} className="navbar-icons" alt="icon" />
                <span className="link-text">Movie</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img src={sports} className="navbar-icons" alt="icon" />
                <span className="link-text">Sports</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <img src={category} className="navbar-icons" alt="icon" />
                <span className="link-text">Category</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
{
  /*  */
}
