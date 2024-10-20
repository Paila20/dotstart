import React from 'react';
import { ArticlesArray } from '../Constants';
import { FaArrowRight } from 'react-icons/fa';
import { data1 } from '../Constants';
import { data2 } from '../Constants';
import { data3 } from '../Constants';
import { data4 } from '../Constants';
import { data5 } from '../Constants';
import { data6 } from '../Constants';
import Vector from "../assets/Vector.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import applestore from "../assets/applestore.png";
import googlepay from "../assets/googlepay.png"
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
       <div className='container6'>
        <div className='home-title'>
           <h1>Recent Articles & News</h1>
           <p>Lorem ipsum dolor sit amet, consecter adipisicing elite</p>
        </div>
        <div>
        <div className="articles-container">
        {ArticlesArray.map((card, index) => (
          <div className="article-image-card" key={index}>
            <img src={card.src} alt={card.title} className="article-image" />
            <h6>{card.desc}</h6>
            <h5>{card.title}</h5>
            <button>Read More <FaArrowRight/></button>
          </div>
        ))}
        </div>
        </div>

       </div>
       <div className='container7'>
        <div className='container7-top'>
            <div className='container7-names'>
                <h5>Real Estate</h5>
                <h5>New Homes</h5>
                <h5>Popular Area</h5>
                <h5>Popular Searches</h5>
            </div>
            <div className='data-estates'>
             <div className="data-container">
                  {data1.map((card, index) => (
                <div className="" key={index}>
                    <p>{card.data}</p>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data2.map((card, index) => (
                <div className="" key={index}>
                    <p>{card.data}</p>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data3.map((card, index) => (
                <div className="" key={index}>
                    <p>{card.data}</p>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data4.map((card, index) => (
                <div className="" key={index}>
                    <p>{card.data}</p>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data5.map((card, index) => (
                <div className="" key={index}>
                    <p>{card.data}</p>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data6.map((card, index) => (
                <div className="" key={index}>
                    <p>{card.data}</p>
                   
                </div>
                ))}
            </div>
        </div>
        </div>
        <div className='container7-bottom'>
          <div>
            <h3>Become a Real Estate Agent</h3>
            <p>We only work with the best companies around the globe</p>
          </div>
          <button>Register Now <FaArrowRight/></button>
        </div>

       </div>
       <div className='footer'>
        <div className="footer-top">
           <div className="footer-top-left">
             <img src={Vector} alt="logo" className='logo'/> <h1>JustHome</h1> 
           </div>
           <div className='footer-top-right'>
            Follow Us
            <img src={facebook} alt="facebook"/>
            <img src={twitter} alt="twitter"/>
            <img src={instagram} alt="instagram"/>
            <img src={linkedin} alt="linkedin"/>
           </div>

        </div>
        <div className='footer-middle'>
          <div>
           <h4> Subscribe</h4>
           <div className='footer-middle-left'>
            <p>Your Email</p>
            <button>Send  <FaArrowRight/></button>
           </div>
           <p>Subscribe to our newsletter to receive our weekly feed</p>
          </div>
          <div className='footer-middle-middle'>
          <div  >
            <h4> Discover</h4>
            <p>Miami</p>
            <p>NewYork</p>
            <p>Chicago</p>
            <p>Florida</p>
            <p>Los Angeles</p>
            <p>San Deiugo</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>About</p>
            <p>Contact</p>
            <p>FAQ's</p>
            <p>Blog</p>
            <p>Pricing Plans</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>hi@justhome.com</p>
            <p>(123)456-7890</p>
          </div>
          <div>
            <h4>Our Address</h4>
            <p>99 fifth Avenue,3rd floor</p>
            <p>San Francisco,CA 1980</p>
          </div>
          <div className='footer-middle-right'>
            <h4>Get The App</h4>
            <img src={applestore} alt="applestore"/>
            <img src={googlepay} alt="googlepay"/>
          </div>
          </div>

        </div>
        <div className='footer-bottom'>
                <p>CopyRight &copy 2024. JustHome</p>
        </div>

       </div>
    </div>
  )
}

export default Footer
