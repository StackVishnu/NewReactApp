import React from "react";
import Slider from "react-slick";
import img2 from '../../assets/civil_war.jpeg'
import img3 from '../../assets/infinity.jpeg'
import img4 from '../../assets/endgame.jpeg'
import './videotitle.css'
import './titlescroll.css'

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="title-scroll-container" >
          <img src="https://image.tmdb.org/t/p/original/yHdPTs239Cqce1s6y9figbeolR1.jpg" alt="" />
        </div>
        <div className="title-scroll-container">
          <img src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/03/IMG_1741.jpeg" alt="" />
        </div>
        <div className="title-scroll-container" >
          <img src={img2} alt="civilwar" />
        </div>
        <div className="title-scroll-container" >
          <img src={img3} alt="" />
        </div>
        <div className="title-scroll-container" >
          <img src={img4} alt="" />
        </div>
        <div className="title-scroll-container" >
          <img src="https://image.tmdb.org/t/p/original/yHdPTs239Cqce1s6y9figbeolR1.jpg" alt="" />
        </div>
    
      </Slider>
    </div>
  );
}

export default MultipleItems;
