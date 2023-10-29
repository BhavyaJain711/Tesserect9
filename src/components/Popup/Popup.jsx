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
          img: 'https://drive.google.com/uc?id=1xBbLkGDABEr4KOAI4oWXQhyyh24qd5Ca'
        },
        {
          img: "https://drive.google.com/uc?id=1vVFs8wwORcm4BX9lv2gqBsqTGT8ayLqH"
        },
        {
          img: "https://drive.google.com/uc?id=1nCTN9w16Q8E9CQiPO1TWU_IKxPYbodOj"
        },
        {
          img: "https://drive.google.com/uc?id=15zQsH2PaX9LM0oQtpvdtZWqjuklHLexb"
        },
        {
          img: "https://drive.google.com/uc?id=1rS5-iELIoEGl_5859IMgg2dpjny85gTj"
        },
        {
          img: "https://drive.google.com/uc?id=1Qeou_SfHO1UzroKGEjN8KpZwODnEqt9i"
        },
        {
          img:"https://drive.google.com/uc?id=1PH4qvvGYVpdJd4QB6lbnB2ACQVr2G7_M"
        },
        {
          img:"https://drive.google.com/uc?id=1Vlkp9qIUCnwhaT34Mv00fZXRIqLN-Nmq"
        },
        {
          img:"https://drive.google.com/uc?id=1MMjPWgUNsI4nbpnIyGntS6f1IJ_8Cgm8"
        },
        {
          img:"https://drive.google.com/uc?id=1BmToe2iWuY_8HGNaJ0LUtYPwXqEep8LG"
        },
        {
          img:"https://drive.google.com/uc?id=1Dc4nw7rmuQmbZfSfmVzjoJ9Ozp_TgHJm"
        },
        {
          img:"https://drive.google.com/uc?id=1JAmjfJWyuG1P7UYkSWYK0i7MIHY76PWg"
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