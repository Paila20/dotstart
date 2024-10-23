

import React from 'react';
import { imagearray1 } from '../Constants'; 
import Properties from './Properties';
import Blog from "./Blog"
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import clienttag from "../assets/clienttag.png";
import image8 from "../assets/image8.png";



import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { FaArrowRight,FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import "./Home.css";

const App = () => {



  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
   
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="container" id="home">
      
        <div className='home-title'>
            <h2>Homes For You</h2>
            <p>Based on your view history</p>
        </div>
  
      <Slider {...settings1} className="main-card">
        {imagearray1.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.src} alt={card.title} className="card-image" />
            <div className="card-content">
              <div className='card-content-title'>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-cost">{card.cost}</p>
              </div>
              <div className="card-location">
                <FaMapMarkerAlt className="location-icon" />
                <span className="location-name">{card.location}</span>
              </div>
              <div className="card-content-icons"> 
                <p><FaBed /> 4 Beds</p>
                <p><FaBath /> 2 Baths</p>
                <p><FaRulerCombined /> 450 sqft</p>
              </div>
            </div>
          </div>
        ))}
        </Slider>
    
    </div>
    <Properties/>
    
   
    <div className='container4' >
       <div className='container4-top-flex'>
         <div>
          <img src={image8} alt="image8" className='image8'/>
          <img src={clienttag} alt="clienttag" className='clienttag'/>
         </div>
         <div className='container4-side'>
           <h3>Local expertise for luxury homes</h3>
           <h6>Pallentesque agestus elementus egestas fausibes sem.  velt nunc egestas ut morbi. Leo deum
            nibh eget fermentum massa pretium. Mi maauris null acdium ut mauris nun. </h6>
            <a href="#pages">
            <button>Learn More <FaArrowRight/></button>
            </a>
         </div>
       </div>
       <div className='container4-bottom'>
        <div >
          <h1>$18M</h1>
          <h6>
            Owned from properties transactions
          </h6>
        </div>
        <div>
          <h1>26K</h1>
          <h6>Properties for Buy</h6>
        </div>
        <div>
          <h1>15K</h1>
          <h6>Properties for Sell</h6>
        </div>
        <div>
          <h1>800</h1>
          <h6>Daily completed transactions</h6>
        </div>
       </div>
     
    </div>

    <Blog/>
    
    </>
  );
}

export default App;


