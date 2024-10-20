import React from 'react';
import elements from "./assets/elements.png";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vector from "./assets/Vector.png";
import callIcon from "./assets/callIcon.png";
import avatar from "./assets/avatar.png";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <img src={elements} alt="element1"  className="homepage"/>
      <div className='header'>
        <div className='header-left'>
        <img src={Vector} alt='logo' className='header-icon'/>
        <h3>JustHome</h3>
        </div>
        <div className='header-middle'>
          <p>Home</p>
          <p>Listings</p>
          <p>Members</p>
          <p>Blog</p>
          <p>Pages</p>
          <p>Contact</p>
        </div>
        <div className='header-right'>
          <img src={callIcon} alt="callIcon"/> <p>+68 685 88666</p>
          <img src={avatar} alt="avatar" className='header-icon2'/>
          <button>Add Property</button>
        </div>
       
      </div>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
