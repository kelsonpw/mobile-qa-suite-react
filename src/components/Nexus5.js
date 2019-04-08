import React from 'react';

function Nexus5({ autoplay, publicKey }) {
  return (
    <div className="device-container">
      <h3>Nexus 5</h3>
      <iframe
        src={`https://appetize.io/embed/${publicKey}?device=nexus5&scale=50&autoplay=${autoplay}&orientation=portrait&deviceColor=black`}
        width="200px"
        height="398px"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}

export default Nexus5;
