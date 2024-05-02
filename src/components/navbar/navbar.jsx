import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faTv} from '@fortawesome/free-solid-svg-icons';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
import { faBaseball} from '@fortawesome/free-solid-svg-icons';
import { faShapes} from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo_icon.svg";
import movie from "../../assets/movie_icon.svg";
import sports from "../../assets/sport_icon.svg";
import category from "../../assets/category_icon.svg";
import "./navbar.css";

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
              <FontAwesomeIcon icon={faCircleUser} className='navbar-icons' />
                <span className="link-text">My Space</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
              <FontAwesomeIcon icon={faMagnifyingGlass} className='navbar-icons' />
                <span className="link-text">Search</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
              <FontAwesomeIcon icon={faHouse} className='navbar-icons' />
                <span className="link-text">Home</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
              <FontAwesomeIcon icon={faTv} className='navbar-icons' />
                <span className="link-text">TV</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
              <FontAwesomeIcon icon={faVideo} className='navbar-icons' />
                <span className="link-text">Movie</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
              <FontAwesomeIcon icon={faBaseball} className='navbar-icons' />
                <span className="link-text">Sports</span>
              </div>
            </li>
            <li>
              <div className="icon-container">
              <FontAwesomeIcon icon={faShapes} className='navbar-icons' />
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
