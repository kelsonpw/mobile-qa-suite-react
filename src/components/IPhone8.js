import React from 'react';

function IPhone8({ autoplay, publicKey }) {
  return (
    <div className="device-container">
      <h3>IPhone 8</h3>
      <iframe
        src={`https://appetize.io/embed/${publicKey}?device=iphone8&scale=50&autoplay=${autoplay}&orientation=portrait&deviceColor=black`}
        width="208px"
        height="435px"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}

export default IPhone8;
