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
    <div className="main">
      <img src={elements} alt="element1" className="homepage" />
      <div className="header">
        <div className="header-left">
          <img src={Vector} alt="logo" className="header-icon" />
          <h3>JustHome</h3>
        </div>
        <div className="burger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />} 
        </div>
        <div className={`header-middle ${isMenuOpen ? 'open' : ''}`}>
          <div className="header-link">Home <FaChevronDown /></div>
          <div>Listings <FaChevronDown /></div>
          <div>Members <FaChevronDown /></div>
          <div>Blog <FaChevronDown /></div>
          <div>Pages <FaChevronDown /></div>
          <div>Contact</div>
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
              <div className="header-left-dropdown">
                <img src={Vector} alt="logo" className="header-icon" />
                <h3>JustHome</h3>
              </div>
              <FaTimes   className="crossicon" onClick={toggleMenu}/>
              </div>
              <div className="dropdown-top">
                <div className="header-link-dropdown">Home   <FaChevronDown /></div>
                <div className="header-link-dropdown" >Listings <FaChevronDown /></div>
                <div className="header-link-dropdown">Members <FaChevronDown /></div>
                <div className="header-link-dropdown">Blog <FaChevronDown /></div>
                <div className="header-link-dropdown">Pages <FaChevronDown /></div>
                <div>Contact</div>
              </div>
              <div className="dropdown-bottom">
                <img src={callIcon} alt="callIcon" /> <p>+68 685 88666</p>
                <img src={avatar} alt="avatar" className="header-icon2" />
                <button>Add Property</button>
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
