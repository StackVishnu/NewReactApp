import "./NavBar.css";
import first from "../../assets/account_circle_FILL0_wght300_GRAD0_opsz24.svg";
import logo from "../../assets/logo_icon.svg";
import search from "../../assets/search_icon.svg";
import home from "../../assets/home_icon.svg";
import tv from "../../assets/tv_icon.svg";
import movie from "../../assets/movie_icon.svg";
import sports from "../../assets/sport_icon.svg";
import category from "../../assets/category_icon.svg";
import { useState } from "react";

function NavBar() {
  const [isHovered,setIsHovered] = useState(false)
  const handleMouseEnter = ()=>{
    setIsHovered(true)
  }
  const handleMouseExit = ()=>{
    setIsHovered(false)
  } 


  return (
    <>
 
      <nav className={`navbar ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseExit}
              
      >
        <div className="logo">
          <img src={logo} className="disney" alt="" />
        </div>
        <div className="navbar-icon-container">
          <ul>
            <li>
              <img src={first} className="navbar-icons" alt="icon" />
              <span className="link-text"> My Space</span>
            </li>
            <li>
              <img src={search} className="navbar-icons" alt="icon" />
              <span className="link-text"> Search</span>
            </li>
            <li>
              <img src={home} className="navbar-icons" alt="icon" />
              <span className="link-text"> Home</span>
            </li>
            <li>
              <img src={tv} className="navbar-icons" alt="icon" />
              <span className="link-text"> TV </span>
            </li>
            <li>
              <img src={movie} className="navbar-icons" alt="icon" />
              <span className="link-text"> Movie</span>
            </li>
            <li>
              <img src={sports} className="navbar-icons" alt="icon" />
              <span className="link-text"> Sports</span>
            </li>
            <li>
              <img src={category} className="navbar-icons" alt="icon" />
              <span className="link-text"> Categories</span>
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
