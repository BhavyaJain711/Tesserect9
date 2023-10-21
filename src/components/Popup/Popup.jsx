import { Button } from 'react-bootstrap';
import Gallery from "../Gallery/Gallery";
import { useState } from 'react';
const PopUp = (props) => {

    const [modal, setModal] = useState(false)

    function openModal() {
      modal===false?setModal(true):setModal(false);
      props.func();
      const element = document.querySelector("#gallery");
      element.scrollIntoView({ behavior: "smooth" });
      
    }
    const galleryImages = [
        {
          img: 'https://picsum.photos/600/600'
        },
        {
          img: "https://picsum.photos/500/600"
        },
        {
          img: "https://picsum.photos/600/500"
        },
        {
          img: "https://picsum.photos/600/600"
        },
        {
          img: "https://picsum.photos/600/600"
        },
        {
          img: "https://picsum.photos/600/600"
        },
        {
          img:"https://picsum.photos/600/600"
        },
        {
          img:"https://picsum.photos/600/600"
        },
        {
          img:"https://picsum.photos/600/600"
        },
        {
          img:"https://picsum.photos/600/600"
        },
        {
          img:"https://picsum.photos/600/600"
        }
      ]

  return (
    <div  className='text-center m-3 popWrapper' style={{display:"relative"}}>
        <Button className="m-auto p-3 " size='s' onClick={openModal} style={{fontSize:"1.5rem",backgroundColor:'#F58840',borderColor:'#B1D1E0'}}>Enter Tessaract Gallery Room</Button>

        {modal?<div className='text-center' style={{backgroundColor:"rgba(255,255,255,0.5)",  Color: 'yellow', width: '100vw',minHeight:"100vh", height: 'fit-content', zIndex: "10",padding:"25px",transform:"translate(0,-25%)"}} >
        
        <Gallery
        galleryImages={galleryImages}
      />
      <Button className="m-3 m-3 p-3 " size='lg' style={{fontSize:"1.5rem",backgroundColor:'#F58840',borderColor:'#B1D1E0'}} onClick={openModal}>Return Back</Button>
        </div>:<></>}
    </div>
  )
}

export default PopUp