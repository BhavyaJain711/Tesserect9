import {useEffect, useState} from "react";
// import './Event.css';
// import axios from "axios";
import data from '../../data/events.json'

const EventsPage = () => {

  const [Events, setEvents] = useState([]);
  const image_url = useState(Events.image_url);
  const registration_URL = useState(Events.registration_URL);
  useEffect(() => {
    // axios.get('/events')
    //   .then(res => {
    //     setEvents(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    setEvents(data);

    }, []);

    return ( 
        <>
        <div className="Event">
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
                          <a href={Events.EventLink} rel="" target="_blank"><button className="Register_button">Register Now</button></a>
                          </div>
                      </div>
                    </span>      
                  </li>)
                })}
              </ul>
            </div>  
          </div>
        </>
     );
}
 
export default EventsPage;