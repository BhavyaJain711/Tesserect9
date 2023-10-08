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
  {/* <Background /> */}
  {/* <Caraousel style={{position:'relative'}}/> */}
  <PopUp  func={toggleGallery}/>
  <Events />
  {/* <About /> */}
    </>
  )
}

export default Home