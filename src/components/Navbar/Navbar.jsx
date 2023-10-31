import React, { useState, useRef } from 'react';
import './navbar.css';

function Navbar() {
  const hamburgerrRef = useRef(null);
  const navMenuRef = useRef(null);
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    setSwitchToggled((prevState) => !prevState);

    if (hamburgerrRef.current && navMenuRef.current) {
      hamburgerrRef.current.classList.toggle('active');
      navMenuRef.current.classList.toggle('active');
    }
  };

  return (
    <div className='navbar-main'>
      <div className='logo'>
        <img src='images/logo.png' style={{ width: '90px' }} />
      </div>
      <div className='links'>
        <ul className='nav-menu' ref={navMenuRef}>
          <li className='nav-item' onClick={ToggleSwitch}><a href="/">Home</a></li>
          {/* <li className='nav-item'><a href='#edm'>EDM</a></li> */}
          <li className='nav-item' onClick={ToggleSwitch}><a href='./#gallery'>Gallery</a></li>
          <li className='nav-item' onClick={ToggleSwitch}><a href='./#events'>Events</a></li>
          <li className='nav-item' onClick={ToggleSwitch}><a href='./#sponsors'>Sponsors</a></li>
          {/* <li className='nav-item'><a href='./#about'>About</a></li> */}
        </ul>
      </div>
      <div className="hamburger" onClick={ToggleSwitch} ref={hamburgerrRef}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
