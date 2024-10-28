import React, { useState } from 'react';
import elements from "./assets/elements.png";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vector from "./assets/Vector.png";
import callIcon from "./assets/callIcon.png";
import avatar from "./assets/avatar.png";
import searchicon from "./assets/searchicon.png";
import { FaChevronDown, FaBars, FaTimes,FaSearch } from 'react-icons/fa';
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main" id="/">
      <img src={elements} alt="element1" className="homepage" />
      <div className="header">
        <a href='/'>
        <div className="header-left">
          <img src={Vector} alt="logo" className="header-icon" />
          <h3>JustHome</h3>
        </div>
        </a>
        <div className="burger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />} 
        </div>
        <div className={`header-middle ${isMenuOpen ? 'open' : ''}`}>
        <a href='#home' className='anchor-links'>
          <div className="header-link">
            <h4>
         Home 
         </h4>
             <FaChevronDown /></div>
             </a>
        <a href='#properties' >
          <div className="header-link">
            <h4>Listings</h4> <FaChevronDown /></div>
          </a>
          <a href='#members' >
          <div className="header-link">
            <h4>Members</h4> <FaChevronDown /></div>
          </a>
          <a href="#blog">
          <div className="header-link">
            <h4>Blog</h4> <FaChevronDown /></div>
          </a>
          <a href='#pages'>
          <div className="header-link">
            <h4>Pages</h4> <FaChevronDown /></div>
          </a>
          <a href="#contact">
          <div>
            <h4>Contact </h4></div>
          </a>
        </div>
        <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
          <a href="#contact">
            <div className='callicondiv'>
          <img src={callIcon} alt="callIcon" /> <h4>+68 685 88666</h4>
          </div>
          </a>
          <a href="#properties">
          <img src={avatar} alt="avatar" className="header-icon2" />
          </a>
            
          <a href="#pages">
          <button>Add Property</button>
          </a>

         
        </div>
       
        {isMenuOpen && (
          <div className="header-dropdown">
            <div className="header-dropdown-content">
              <div className="header-dropdown-item">
                <a href="/">
              <div className="header-left-dropdown">
                <img src={Vector} alt="logo" className="header-icon" />
                <h3>JustHome</h3>
              </div>
              </a>
              <FaTimes   className="crossicon" onClick={toggleMenu}/>
              </div>
              <div className="dropdown-top">
                <a href="#home" onClick={toggleMenu}>
                <div className="header-link-dropdown">Home   <FaChevronDown /></div>
                </a>
                <a href="#properties" onClick={toggleMenu}>
                <div className="header-link-dropdown" >Listings <FaChevronDown /></div>
                </a>
                <a href="#members" onClick={toggleMenu}>
                <div className="header-link-dropdown">Members <FaChevronDown /></div>
                </a>
                <a href="#blog" onClick={toggleMenu}>
                <div className="header-link-dropdown">Blog <FaChevronDown /></div>
                </a>
                <a href="#pages" onClick={toggleMenu}>
                <div className="header-link-dropdown">Pages <FaChevronDown /></div>
                </a>
                <a href="#contact" onClick={toggleMenu}  >
                <div>Contact</div>
                </a>
              </div>
              <div className="dropdown-bottom">
                <a href="#contact" onClick={toggleMenu}>
                <img src={callIcon} alt="callIcon" /> <p>+68 685 88666</p>
                </a>
                <img src={avatar} alt="avatar" className="header-icon2" />
                <a href="members" onClick={toggleMenu}>
                <button>Add Property</button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
          <div className='homepage-middle'>
            <button>LET US GUIDE YOUR HOME</button>
            <h1>Discover a place you'll love to live</h1>
            <div className='homepage-options'>
              <h5 className='option1'>Sale</h5>
              <h5>Rent</h5>
            </div>
            <div className='searchbar'>
              <input placeholder="Enter Names,Keywords..."/>
              <img src={searchicon} alt="searchicon"/>

            </div>
          </div>

      <Home />
      <Footer />
    </div>
  );
}

export default App;
