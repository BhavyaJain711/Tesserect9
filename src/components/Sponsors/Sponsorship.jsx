import './sponsorship.css'; 

const Sponsorship = (props) => {
  return (
    <div className="sponsorship-container">
      <h2 className="sponsorship-title">SPONSORED BY:</h2>
      <ul className="sponsor-list">
        {props.sponsors.map((sponsor, index) => (
          <li key={index} className="sponsor-item">
            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            <span className="sponsor-name">{sponsor.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sponsorship;
