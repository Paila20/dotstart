import React, { useState } from 'react';
import elements from "./assets/elements.png";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vector from "./assets/Vector.png";
import callIcon from "./assets/callIcon.png";
import avatar from "./assets/avatar.png";
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
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
         home 
             <FaChevronDown /></div>
             </a>
        <a href='#properties' >
          <div className="header-link">Listings <FaChevronDown /></div>
          </a>
          <a href='#members' >
          <div className="header-link">Members <FaChevronDown /></div>
          </a>
          <a href="#blog">
          <div className="header-link">Blog <FaChevronDown /></div>
          </a>
          <a href='#pages'>
          <div className="header-link">Pages <FaChevronDown /></div>
          </a>
          <a href="#contact">
          <div>Contact</div>
          </a>
        </div>
        <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
          <img src={callIcon} alt="callIcon" /> <p>+68 685 88666</p>
          <img src={avatar} alt="avatar" className="header-icon2" />
          <button>Add Property</button>
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

      <Home />
      <Footer />
    </div>
  );
}

export default App;
