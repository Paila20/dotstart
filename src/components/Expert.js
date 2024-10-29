import React from 'react';
import clienttag from "../assets/clienttag.png";
import image8 from "../assets/image8.png";
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";

const Expert = () => {
  return (
    <div>
      <div className='container4'>
        <div className='container4-top-flex'>
          <div className='image-wrapper'>
            <img src={image8} alt="image8" className='image8' />
            <img src={clienttag} alt="clienttag" className='clienttag' />
          </div>
          <div className='container4-side'>
            <h3>Local expertise for luxury homes</h3>
            <h6>Pellentesque egestas elementum egestas facilisis sem. Velit nunc egestas ut morbi. Leo id nibh eget fermentum massa pretium. Mi mauris nulla aliquam ut mauris nunc.</h6>
            <a href="#pages">
              <button>Learn More <FaArrowRight /></button>
            </a>
          </div>
        </div>
        <div className='container4-bottom'>
          <div>
            <h2>$18M</h2>
            <h6>Owned from properties transactions</h6>
          </div>
          <div>
            <h2>26K</h2>
            <h6>Properties for Buy</h6>
          </div>
          <div>
            <h2>15K</h2>
            <h6>Properties for Sell</h6>
          </div>
          <div>
            <h2>800</h2>
            <h6>Daily completed transactions</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expert
