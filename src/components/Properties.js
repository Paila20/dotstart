import React from 'react';
import Link from "../assets/Link.png";
import Link1 from "../assets/Link 1.png";
import Link2 from "../assets/Link 2.png";
import Link3 from "../assets/Link 3.png";
import Link4 from "../assets/Link 4.png";
import Link5 from "../assets/Link 5.png";
import { IconArray } from '../Constants';
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import "./Home.css"

const Properties = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", background: "black" }} // You can change styles here
        onClick={onClick}
      >
        <FaChevronLeft />
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", background: "blue" }} // You can change styles here
        onClick={onClick}
      >
        <FaChevronRight />
      </button>
    );
  };
  
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      prevArrow:<CustomPrevArrow/> ,
      nextArrow:<CustomNextArrow/> 
    }
  
  return (
    <div>
      <div className='container2' id="properties">

<div className='home-title'>
    <h3>Find Properties in These Cities</h3>
    <p>Lorem ipsum dolor sit amet, consecter adipisicing elite</p>
</div>
<div className='main-container2'>

<div className='top-links'>
  <img src={Link} alt="link" className='link-image2'/>
  <div className='top-links-side'>
  <img src={Link1} alt="link1" className='link-image'/>
  <img src={Link2} alt="link2" className='link-image'/>
  </div>
</div>
  <div className='bottom-links'>
  <div className='top-links-side'>
  <img src={Link3} alt="link3" className='link-image'/>

  <img src={Link4} alt="link4" className='link-image'/>
  </div>
  <img src={Link5} alt="link5" className='link-image2'/>
  
  </div>
 
</div>
<div className='container3'>
<div className='home-title'>
    <h4>Why Choose Us</h4>
    <p>Lorem ipsum dolor sit amet, consecter adipisicing elite</p>
</div>
<div className="icon-container">
{IconArray.map((card, index) => (
  <div className="icon-image-card" key={index}>
    <img src={card.src} alt={card.title} className="icon-image" />
    <h5>{card.title}</h5>
    <p>{card.desc}</p>
  </div>
))}
</div>
</div>

</div>
<div>

</div>
<div className='container2' id="members">
    <div className='home-title'>
            <h5>Best Properties</h5>
            <p>Lorem ipsum dolor sit amet, consecter adipisicing elite</p>
        </div>
        <div className='main-container3'>
        <div className='image-links'>
          <Slider {...settings} className='image4'>
          <img src={image4} alt="link" className='image4-img'/>
          <img src={image4} alt="link" className='image4-img'/>
          <img src={image4} alt="link" className='image4-img'/>

          </Slider>
          <div className='top-links-side'>
          <img src={image5} alt="link1" className='link-image'/>
          <img src={image6} alt="link2" className='link-image'/>
          </div>
        </div>
        <img src={image7} alt="link2" className='image4'/>

        </div>
        
    </div>
   
    </div>
  )
}

export default Properties
