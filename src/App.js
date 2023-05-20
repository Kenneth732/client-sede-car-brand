import React, { useEffect, useState } from 'react';
import './App.css';
import CyborgPopup from './components/CyborgPopup';

function App() {
  const [cyborgs, setCyborgs] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedCyborg, setSelectedCyborg] = useState(null);

  useEffect(() => {
    fetch('/cyborgs')
      .then((res) => res.json())
      .then((dataArrays) => {
        setCyborgs(dataArrays);
      });
  }, []);

  const handleCardClick = (cyborg) => {
    if (selectedCyborg === cyborg) {
      setSelectedCyborg(null);
      setPopupVisible(false);
    } else {
      setSelectedCyborg(cyborg);
      setPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setSelectedCyborg(null);
    setPopupVisible(false);
  };

  return (
    <div className="app">
      <h1>Cyborg Catalog</h1>
      <div className="cyborg-list">
        {cyborgs.map((cyborg) => (
          <div
            className={`cyborg-card ${selectedCyborg === cyborg && isPopupVisible ? 'zoomed' : ''}`}
            key={cyborg.id}
            onClick={() => handleCardClick(cyborg)}
          >
            <div className="img-card">
              <img src={cyborg.image} alt={cyborg.name} />
            </div>
            <div className="cyborg-details">
              <h2>{cyborg.name}</h2>
              <h4>{cyborg.model}</h4>
              <h2>{cyborg.price}</h2>
              <p>{cyborg.description}</p>
              <p>{cyborg.location}</p>
            </div>
          </div>
        ))}
      </div>
      {isPopupVisible && (
        <CyborgPopup cyborg={selectedCyborg} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default App;
