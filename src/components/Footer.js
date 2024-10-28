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
    <div className='Footer' id="pages">
       <div className='container6'>
        <div className='home-title'>
           <h2>Recent Articles & News</h2>
           <h5>Lorem ipsum dolor sit amet, consecter adipisicing elite</h5>
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
                <h4>Real Estate</h4>
                <h4>New Homes</h4>
                <h4>Popular Area</h4>
                <h4>Popular Searches</h4>
            </div>
            <div className='data-estates'>
             <div className="data-container">
                  {data1.map((card, index) => (
                <div className="" key={index}>
                    <h5>{card.data}</h5>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data2.map((card, index) => (
                <div className="" key={index}>
                    <h5>{card.data}</h5>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data3.map((card, index) => (
                <div className="" key={index}>
                    <h5>{card.data}</h5>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data4.map((card, index) => (
                <div className="" key={index}>
                    <h5>{card.data}</h5>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data5.map((card, index) => (
                <div className="" key={index}>
                    <h5>{card.data}</h5>
                   
                </div>
                ))}
            </div>
            <div className="data-container">
                  {data6.map((card, index) => (
                <div className="" key={index}>
                    <h5>{card.data}</h5>
                   
                </div>
                ))}
            </div>
        </div>
        </div>
        <div className='container7-bottom'>
          <div>
            <h2>Become a Real Estate Agent</h2>
            <h5>We only work with the best companies around the globe</h5>
          </div>
          <a href="/" >
          <button>Register Now <FaArrowRight/></button>
          </a>
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
        <div className='footer-middle' id="contact">
          <div>
           <h3> Subscribe</h3>
           <div className='footer-middle-left'>
            <h4>Your Email</h4>
            <button>Send  <FaArrowRight/></button>
           </div>
           <h4>Subscribe to our newsletter to receive our weekly feed</h4>
          </div>
          <div className='footer-middle-middle'>
          <div  >
            <h3> Discover</h3>
            <a href="/">
            <h4>Miami</h4>
            </a>
            <a href="/">
            <h4>NewYork</h4>
            </a>
            <a href="/">
            <h4>Chicago</h4>
            </a>
            <a href="/">
            <h4>Florida</h4>
            </a>
            <a href="/">
            <h4>Los Angeles</h4>
            </a>
            <a href="/">
            <h4>San Deiugo</h4>
            </a>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#home">
            <h4>About</h4>
            </a>
            <a href="#contact">
            <h4>Contact</h4>
            </a>
            <a href="#blog">
            <h4>FAQ's</h4>
            </a>
            <a href="#blog">
            <h4>Blog</h4>
            </a>
            
            <h4>Pricing Plans</h4>
            

            <h4>Privacy Policy</h4>
          
           
            <h4>Terms & Conditions</h4>
            
          </div>
          <div>
            <h3>Contact Us</h3>
            <h4>hi@justhome.com</h4>
            <h4>(123)456-7890</h4>
          </div>
          <div>
            <h3>Our Address</h3>
            <h4>99 fifth Avenue,3rd floor</h4>
            <h4>San Francisco,CA 1980</h4>
          </div>
          <div className='footer-middle-right'>
            <h3>Get The App</h3>
            <img src={applestore} alt="applestore"/>
            <img src={googlepay} alt="googlepay"/>
          </div>
          </div>

        </div>
        <div className='footer-bottom'>
                <h4>CopyRight &copy 2024. JustHome</h4>
        </div>

       </div>
    </div>
  )
}

export default Footer
