import React from 'react'
import './IntroComponent.css';
function VideoConsent(props) {
  // return (<>
  //   <div style={{position:'absolute',top:'0',left:'0',width:'100vw',height:'100vh',backgroundColor:'skyblue',opacity:'1',zIndex:'2147483647'}}>
  //       <p>Hello</p>
  //   </div>
  // </>
  // )
  function handleClick(e) {
    e.preventDefault();
    const isMobile = window.innerWidth <= 700;
    if(isMobile) {
      props.mobileClick();
    }
    else
      props.clickEvent();
  }
  return (<>
  {/* <video
      
      id="background-video"
      autoPlay
      loop
      muted
      poster="https://assets.codepen.io/6093409/river.jpg"
    >
      <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
    </video> */}
    <iframe
    style={{position:'absolute',top:'0',left:'0',width:'100vw',height:'100vh',opacity:'1',zIndex:'2147483647',margin:0,overflow:'hidden',filter:'brightness(0.5)'}}
      id="background-video"
      src="https://www.youtube.com/embed/eej9TCLhwt8?si=zpMg-sO3TzXCdFfK&controls=0&autoplay=1&mute=1&start=8&rel=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
    <div className="intro-container" style={{position:'absolute',top:'0',left:'0',width:'100vw',height:'100vh',opacity:'1',zIndex:'2147483647',margin:0,overflow:'hidden'}}>
        <img src="images/logo.png" alt="Event Logo" className="event-logo" />
        {/* <h1 className="event-name">Tesseract 9.0</h1> */}
        <p className="catchy-line">Unleash Your Inner Hero</p>
        <button onClick={handleClick} className="explore-button">Explore Now</button>
        
    </div>
  </>
    
  );
}

export default VideoConsent