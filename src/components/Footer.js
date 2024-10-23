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
            <h2>Become a Real Estate Agent</h2>
            <p>We only work with the best companies around the globe</p>
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
            <a href="/">
            <p>Miami</p>
            </a>
            <a href="/">
            <p>NewYork</p>
            </a>
            <a href="/">
            <p>Chicago</p>
            </a>
            <a href="/">
            <p>Florida</p>
            </a>
            <a href="/">
            <p>Los Angeles</p>
            </a>
            <a href="/">
            <p>San Deiugo</p>
            </a>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#home">
            <p>About</p>
            </a>
            <a href="#contact">
            <p>Contact</p>
            </a>
            <a href="#blog">
            <p>FAQ's</p>
            </a>
            <a href="#blog">
            <p>Blog</p>
            </a>
            
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
