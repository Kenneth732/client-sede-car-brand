import React from 'react';

function CyborgPopup({ cyborg, onClose }) {
  return (
    <div className="cyborg-popup">
      <div className="cyborg-details">
      <div className="img-card">
              <img src={cyborg.image} alt={cyborg.name} />
            </div>
        <h2>{cyborg.name}</h2>
        <h4>{cyborg.model}</h4>
        <h2>{cyborg.price}</h2>
        <p>{cyborg.description}</p>
        <p>{cyborg.location}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CyborgPopup;
