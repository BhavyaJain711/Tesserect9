import React, {useState} from "react";
import './Events.css';
import data from '../../data/events.json';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Events = () => {
  const navigate = useNavigate();
  const navigateEvents=()=>{
    navigate('/events');
  }
    // const datas = JSON.parse(data);
    const [Events, setEvents] = useState(data.slice(0,8));
    const image_url = useState(Events.image_url);
    const registration_URL = useState(Events.registration_URL);
    return ( 
        <>
        <div  className="Event">
        <div className="cards">
              <ul className="cards">
              {Events.map((Events) => {
              let validInput=Events.EventPoster&&Events.EventLink;
                 return(validInput&&<li key={Events.EventPoster}>
                    <span href="" className="card">
                      <img src={Events.EventPoster}  className="card__image" alt="image" />
                        <div className="card__overlay">
                          <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <div className="card__header-text">
                              <h3 className="card__Name">{Events.EventName}</h3>  
                              <span className="card__Club">{Events.ClubName}</span>          
                              <span className="card__Time">{Events.EventTime}</span>
                            </div>
                          </div>
                          <div className="Button">
                          <a href={Events.EventLink} target="_blank"><button className="Register_button">Register Now</button></a>
                          </div>
                      </div>
                    </span>      
                  </li>)
                })}
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