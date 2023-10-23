import { useState } from 'react';
import Events from "../../components/Events/Events";
import PopUp from "../../components/Popup/Popup";
import Video from '../../components/Video/Video';
import { Button } from 'react-bootstrap';
import VideoConsent from '../../components/Video/VideoConsent';
function Home() {
    const [gallery,setGallery]= useState(false);
  const toggleGallery = ()=> {
  gallery?setGallery(false):setGallery(true);
  }
  const [showVideo,setShowVideo]= useState(false);
  const [showLoadingVideo,setShowLoadingVideo]= useState(true);
  return (
    <>
    {/* <Button onClick={()=>setShowVideo(true)}>Show Video</Button>
    {showLoadingVideo&&(showVideo?<Video />:<VideoConsent />)} */}
  <h1 id="gallery" style={{margin:'4rem'}}>Gallery</h1>
  <PopUp  func={toggleGallery}/>
  <h1 id="events" style={{margin:'4rem'}}>Events</h1>
  <Events />
  {/* <About /> */}
    </>
  )
}

export default Home