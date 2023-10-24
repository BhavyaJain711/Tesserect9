import React from 'react'
import { useEffect } from 'react';
import './Parallax.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Bg1 from './bg.jpg'
import moon from './moon.png';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';
import jet from './jet.png';
import ironman from './ironman07.png'

const Parallax = () => {
  useEffect(() => {
    // Initialize GSAP animations here
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to("#bg", {
      scrollTrigger: {
        scrub: true,
      },
      y: 200,
      scale: 1.5,
    });
    gsap.to("#moon", {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
      scale: 2,
    });
    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
    });
    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
    });
    gsap.to("#jet", {
      scrollTrigger: {
        scrub: true,
      },
      x: 1500,
      y: 200,
      scale: 3,
    });
    gsap.to("#ironman", {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -1800,
      scale: 2.5,
      rotate: -30,
    });
    
  
    // Define other GSAP animations here
  }, []); 
  return (
    <div>
      <div className="dashboard">
      <section>
        <img src={Bg1} id="bg" alt="building skyline" />
        <img src={moon} id="moon" alt="full moon" />
        <img src={cloud1} id="cloud1" alt="clouds" />
        <img src={cloud2} id="cloud2" alt="clouds" />
        <img src={jet} id="jet" alt="flying Avengers jet" />
        <img src={ironman} id="ironman" alt="flying ironman" />
      </section>
    <div className="sec">
        <div className="content">
          <h2>
            <span id="heading">TESSERACT 9.0</span>
          </h2>
          <p>
            <span id="text">
            Tesseract, the annual Science and Technical Fest of PDEU, is one of Gujarat's biggest technical college fests. Tesseract provides a platform for tech nerds from colleges such as Pandit Deendayal Energy University and many others to interact, share and celebrate aspirations, creativity, and innovations. It attracts over 6,000 people each year and gives all the students who attend a platform to network and learn about cutting-edge developments in the areas of science and technology.
            </span>
          </p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Parallax
