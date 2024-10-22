import React from 'react';
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import "./Home.css"

const Blog = () => {
  return (
    <div>
      <div className='container5' id="blog" >
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
    </div>
  )
}

export default Blog
