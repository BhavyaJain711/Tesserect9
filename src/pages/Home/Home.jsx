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
    <div style={{ height: '300vh', width: '90vw', backgroundColor: '#B85252',display:'flex',margin:'0 auto' }}>
      <h1>Add some scroll effect and then remove me</h1>
    </div>
  <h1 id="gallery" style={{margin:'4rem'}}>Gallery</h1>
  <PopUp  func={toggleGallery}/>
  <h1 id="events" style={{margin:'4rem'}}>Events</h1>
  <Events />
  {/* <About /> */}
    </>
  )
}

export default Home