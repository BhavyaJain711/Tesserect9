import { useState } from 'react';
import Events from "../../components/Events/Events";
import PopUp from "../../components/Popup/Popup";
function Home() {
    const [gallery,setGallery]= useState(false);
  const toggleGallery = ()=> {
  gallery?setGallery(false):setGallery(true);
  }
  return (
    <>
    
    <div style={{ height: '300vh', width: '90vw', backgroundColor: 'skyblue',display:'flex',margin:'0 auto' }}>
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