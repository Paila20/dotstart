

// import React from 'react';
// import { imagearray1 } from '../Constants'; 
// import Properties from './Properties';
// import Blog from "./Blog"
// import {FaMapMarkerAlt } from 'react-icons/fa'; 
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import clienttag from "../assets/clienttag.png";
// import image8 from "../assets/image8.png";



// import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
// import { FaArrowRight,FaChevronLeft,FaChevronRight} from 'react-icons/fa';
// import "./Home.css";

// const App = () => {

//   const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <button
   
//         style={{  display: "block", backgroundColor: "lightgray" , borderRadius:17, color:"black",width:40,height:30,zIndex:10,marginLeft:-90,border:"gray",top:120,position:"relative"}} // You can change styles here
//         onClick={onClick}
//       >
//         <FaChevronLeft />
//       </button>
//     );
//   };
  
//   const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <button
       
//         style={{   display: "block", backgroundColor: "lightgray" , borderRadius:17, color:"black",width:40,height:30,zIndex:10,marginLeft:1100,border:"gray",top:120,position:"relative" }} // You can change styles here
//         onClick={onClick}
//       >
//         <FaChevronRight />
//       </button>
//     );
//   };
  


//   const settings1 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow/>,
//     nextArrow: <NextArrow/>,

   
   
   
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <>
//     <div className="container" id="home">
      
//         <div className='home-title'>
//             <h2>Homes For You</h2>
//             <h5>Based on your view history</h5>
//         </div>
  
//       <Slider {...settings1} className="main-card">
//         {imagearray1.map((card, index) => (
//           <div className="card" key={index}>
//             <img src={card.src} alt={card.title} className="card-image" />
//             <div className="card-content">
//               <div className='card-content-title'>
//                 <h3 className="card-title">{card.title}</h3>
//                 <h4 className="card-cost">{card.cost}</h4>
//               </div>
//               <div className="card-location">
//                 <FaMapMarkerAlt className="location-icon" />
//                 <span className="location-name"><h5>{card.location}</h5></span>
//               </div>
//               <div className="card-content-icons"> 
//                 <h5><FaBed /> 4 Beds</h5>
//                 <h5><FaBath /> 2 Baths</h5>
//                 <h5><FaRulerCombined /> 450 sqft</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//         </Slider>
    
//     </div>
//     <Properties/>
    
   
//     <div className='container4' >
//        <div className='container4-top-flex'>
//          <div>
//           <img src={image8} alt="image8" className='image8'/>
//           <img src={clienttag} alt="clienttag" className='clienttag'/>
//          </div>
//          <div className='container4-side'>
//            <h3>Local expertise for luxury homes</h3>
//            <h6>Pallentesque agestus elementus egestas fausibes sem.  velt nunc egestas ut morbi. Leo deum
//             nibh eget fermentum massa pretium. Mi maauris null acdium ut mauris nun. </h6>
//             <a href="#pages">
//             <button>Learn More <FaArrowRight/></button>
//             </a>
//          </div>
//        </div>
//        <div className='container4-bottom'>
//         <div >
//           <h2>$18M</h2>
//           <h6>
//             Owned from properties transactions
//           </h6>
//         </div>
//         <div>
//           <h2>26K</h2>
//           <h6>Properties for Buy</h6>
//         </div>
//         <div>
//           <h2>15K</h2>
//           <h6>Properties for Sell</h6>
//         </div>
//         <div>
//           <h2>800</h2>
//           <h6>Daily completed transactions</h6>
//         </div>
//        </div>
     
//     </div>

//     <Blog/>
    
//     </>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { imagearray1 } from '../Constants';
import Properties from './Properties';
import Blog from "./Blog";
import Expert from './Expert';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clienttag from "../assets/clienttag.png";
import image8 from "../assets/image8.png";
import "./Home.css";

const App = () => {
 

  const PrevArrow = (props) => {
    const { onClick } = props;
  

    return (
      <button
        style={{
          display: "block",
          backgroundColor: "lightgray",
          borderRadius: 17,
          color: "black",
          width: 40,
          height: 30,
          zIndex: 10,
          // left: arrowPosition,
          left:"6%",
          position: "absolute",
          top: "40%", 
          transform: "translateY(-50%)",
          border: "none",
          cursor: "pointer"
        }}
        // className='left-custom-button'
        onClick={onClick}
      >
        <FaChevronLeft />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
   

    return (
      <button
        style={{
          // display: "block",
          backgroundColor: "lightgray",
          borderRadius: 17,
          color: "black",
          width: 40,
          height: 30,
          zIndex: 10,
       
          right:"5.8%",
          // right: window.innerWidth < 600 ? "10%" : "5%",
          position: "absolute",
          top: "40%",
          transform: "translateY(-50%)",
          border: "none",
          cursor: "pointer"
        }}
        onClick={onClick}
        // className='right-custome-button'
      >
        <FaChevronRight />
      </button>
    );
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
 
      
  };

  return (
    <>
      <div className="container" id="home">
        <div className='home-title'>
          <h2>Homes For You</h2>
          <h5>Based on your view history</h5>
        </div>
       
        <Slider {...settings1} className="main-card">
         
          {imagearray1.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.src} alt={card.title} className="card-image" />
              <div className="card-content">
                <div className='card-content-title'>
                  <h3 className="card-title">{card.title}</h3>
                  <h4 className="card-cost">{card.cost}</h4>
                </div>
                <div className="card-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span className="location-name"><h5>{card.location}</h5></span>
                </div>
                <div className="card-content-icons">
                  <h5><FaBed /> 4 Beds</h5>
                  <h5><FaBath /> 2 Baths</h5>
                  <h5><FaRulerCombined /> 450 sqft</h5>
                </div>
              </div>
            </div>
          ))}
        
        </Slider>
        
      </div>

      <Properties />
      <Expert/>
      <Blog />
    </>
  );
};

export default App;
