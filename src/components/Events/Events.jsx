import React, {useState} from "react";
import './Events.css';
import data from '../../data.json';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Events = () => {
  const navigate = useNavigate();
  const navigateEvents=()=>{
    navigate('/events');
  }
    // const datas = JSON.parse(data);
    const [Events, setEvents] = useState(data);
    const image_url = useState(Events.image_url);
    const registration_URL = useState(Events.registration_URL);
    return ( 
        <>
        <div  className="Event">
        <div className="cards">
              <ul className="cards">
          {Events.map((Events) => (
                  <li key={Events.image}>
                    <span href="" className="card">
                      {/* <img src="https://images.pexels.com/photos/2409038/pexels-photo-2409038.jpeg?auto=compress&cs=tinysrgb&w=600" className="card__image" alt="" /> */}
                      <img src= {Events.image} className="card__image" alt="" />
                        <div className="card__overlay">
                          <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <div className="card__header-text">
                              <h3 className="card__Name">{Events.eventName}</h3>  
                              
                              <span className="card__Club">{Events.club}</span>          
                              <span className="card__Time">
                                {Events.time} : {Events.venue}
                              </span>
                              </div>
                          </div>
                          <div className="Button">
                            <a href={Events.registration}>
                              <button className="Register_button">Register Now</button>
                            </a>
                          </div>
                      </div>
                    </span>      
                  </li>
                ))}
              </ul>

            </div>  
          </div> 
          <center>

              <Button onClick={navigateEvents} style={{padding:"10px",marginBottom:"20px",fontSize:"1.5rem", backgroundColor:"#F58840",borderColor:'#B1D1E0'}}  size='lg' >Show all Events...</Button>
          </center>
        </>
     );
}
 
export default Events;