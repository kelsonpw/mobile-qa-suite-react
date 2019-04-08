import React from 'react';

function Nexus9({ autoplay, publicKey }) {
  return (
    <div className="device-container">
      <h3>Nexus 9</h3>
      <iframe
        src={`https://appetize.io/embed/${publicKey}?device=nexus9&scale=50&autoplay=${autoplay}&orientation=portrait&deviceColor=black`}
        width="433px"
        height="644px"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}

export default Nexus9;
