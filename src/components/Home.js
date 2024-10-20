

import React from 'react';
import { imagearray1 } from '../Constants'; 
import { IconArray } from '../Constants';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import Link from "../assets/Link.png";
import Link1 from "../assets/Link 1.png";
import Link2 from "../assets/Link 2.png";
import Link3 from "../assets/Link 3.png";
import Link4 from "../assets/Link 4.png";
import Link5 from "../assets/Link 5.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";

const App = () => {
  return (
    <>
    <div className="container">
        <div className='home-title'>
            <h1>Homes For You</h1>
            <p>Based on your view history</p>
        </div>
      <div className="main-card">
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
      </div>
    </div>
    <div className='container2'>

        <div className='home-title'>
            <h1>Find Properties in These Cities</h1>
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
            <h1>Why Choose Us</h1>
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
    <div className='container2'>
    <div className='home-title'>
            <h1>Best Properties</h1>
            <p>Lorem ipsum dolor sit amet, consecter adipisicing elite</p>
        </div>
        <div className='main-container3'>
        <div className='image-links'>
          <img src={image4} alt="link" className='image4'/>
          <div className='top-links-side'>
          <img src={image5} alt="link1" className='link-image'/>
          <img src={image6} alt="link2" className='link-image'/>
          </div>
        </div>
        <img src={image7} alt="link2" className='image4'/>

        </div>
        
    </div>
    <div className='container4'>
       <div className='container4-top-flex'>
         <div>
          <img src={image8} alt="image8" className='image8'/>
         </div>
         <div className='container4-side'>
           <h3>Local expertise for luxury homes</h3>
           <h6>Pallentesque agestus elementus egestas fausibes sem.  velt nunc egestas ut morbi. Leo deum
            nibh eget fermentum massa pretium. Mi maauris null acdium ut mauris nun. </h6>
            <button>Learn More <FaArrowRight/></button>
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
    <div className='container5'>
      <div className='container5-top'>
        <div>
          <h2>What our customers are saying us?</h2>
          <p>various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
          <div className='container5-flex'>
          <div >
            <h1>10M+</h1>
            <p>happy people</p>
          </div>
          <div>
            <h1>4.88</h1>
            <p>overall ratting</p>
          </div>
          </div>
        </div>
        <div>
        <div className='container5-top-side'>
          <img src={image9} alt="image9"/>
         <div>
           <p>Cameron Williamson</p>
           <h6>Designer</h6>
         </div>
           
        </div>
        <p>Searches for multiplexes,property comparisions, and the loan
           estimator.Works great.Lorem ipsum dolor sit amet
          consectetur adipiscing elite, sed do eiudsmon tempor incididunt ut labour et dores.
        </p>
        </div>

      </div>
      <div className='container5-bottom'>
        <p>Thousands of worlds leading companies trust Space</p>
        <div className='container5-bottom-images'>
        <img src={image10} alt="image10"/>
        <img src={image11} alt="image11"/>
        <img src={image12} alt="image12"/>
        <img src={image13} alt="image13"/>
        <img src={image14} alt="image14"/>
        <img src={image15} alt="image15"/>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;


