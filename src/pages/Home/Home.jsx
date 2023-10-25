import { useState, useEffect } from 'react';
import Events from "../../components/Events/Events";
import PopUp from "../../components/Popup/Popup";
import Video from '../../components/Video/Video';
import { Button } from 'react-bootstrap';
import VideoConsent from '../../components/Video/VideoConsent';
import Sponsers from '../Sponsers';
import Parallax from '../../components/Parallax/Parallax';

function Home() {
  const [gallery, setGallery] = useState(false);
  const toggleGallery = () => {
    gallery ? setGallery(false) : setGallery(true);
  }
  
  const currentTime = new Date().getTime();

  const [showVideo, setShowVideo] = useState(false);
  const [showLoadingVideo, setShowLoadingVideo] = useState(currentTime - parseInt(localStorage.getItem('exploreNowClickedTimestamp'), 10) < 5 * 60 * 1000? false : true)

  useEffect(() => {
    const lastClickedTimestamp = localStorage.getItem('exploreNowClickedTimestamp');
      const currentTime = new Date().getTime();
      localStorage.setItem('exploreNowClickedTimestamp', currentTime.toString());
    
  }, []);

  function mobileClickConsent() {
    setShowLoadingVideo(false);
  }

  const handleExploreNowClick = () => {
    setShowVideo(true);
    setShowLoadingVideo(false);

    // Store the current timestamp in localStorage
    const currentTime = new Date().getTime();
    localStorage.setItem('exploreNowClickedTimestamp', currentTime.toString());
  }

  return (
    <>
      {showLoadingVideo && (showVideo ? <Video clickEvent={() => setShowLoadingVideo(!setShowLoadingVideo)} /> : <VideoConsent mobileClick={() => mobileClickConsent()} clickEvent={() => mobileClickConsent()} />)}
      {!showLoadingVideo && <>
        <Parallax />
        <h1 id="gallery" style={{ margin: '4rem' }}>Gallery</h1>
        <PopUp func={toggleGallery} />
        <h1 id="events" style={{ margin: '4rem' }}>Events</h1>
        <Events />
      </>}
    </>
  )
}

export default Home;
