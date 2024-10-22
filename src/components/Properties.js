import React from 'react';
import Link from "../assets/Link.png";
import Link1 from "../assets/Link 1.png";
import Link2 from "../assets/Link 2.png";
import Link3 from "../assets/Link 3.png";
import Link4 from "../assets/Link 4.png";
import Link5 from "../assets/Link 5.png";
import { IconArray } from '../Constants';
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';
import "./Home.css"

const Properties = () => {
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
    </div>
  )
}

export default Properties
