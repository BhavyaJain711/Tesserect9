import React from 'react'
import Sponsorship from '../components/Sponsors/Sponsorship.jsx'
const Sponsers = () => {
    const sponsors = [
        {
          name: "Company A",
          logo: "companyA.png" 
        },
        {
          name: "Company B",
          logo: "companyB.png" 
        },
        {
          name: "Company C",
          logo: "companyC.png" 
        },
        {
          name: "Company A",
          logo: "companyA.png"
        },
        {
          name: "Company B",
          logo: "companyB.png" 
        },
        {
          name: "Company C",
          logo: "companyC.png" 
        },
        {
          name: "Company A",
          logo: "companyA.png" 
        },
        {
          name: "Company B",
          logo: "companyB.png" 
        },
        {
          name: "Company C",
          logo: "companyC.png" 
        }
      ];
    
      return (
        <div className="App">
          <header>
            <h1>TESSARACT</h1>
          </header>
          <main>
            <Sponsorship sponsors={sponsors} />
            
            
          </main>
          <footer>
            <p>&copy; 2023 SnT</p>
          </footer>
        </div>
      );
}

export default Sponsers