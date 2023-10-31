import React from 'react'
import Sponsorship from '../components/Sponsors/Sponsorship.jsx'
const Sponsers = () => {
    const sponsors = [
        {
          name: "Renaissance, Gandhinagar",
          logo: "./images/Renaissance-logo.png" 
        },
        {
          name: "UnStop",
          logo: "./images/unstop-logo.svg" 
        },
        {
          name: "Disha Consultancy",
          logo: "./images/DC-logo.png" 
        }
      ];
    
      return (
        <div>
          <main>
            <Sponsorship sponsors={sponsors} />
            
            
          </main>
          {/* <footer>
            <p>&copy; 2023 SnT</p>
          </footer> */}
        </div>
      );
}

export default Sponsers