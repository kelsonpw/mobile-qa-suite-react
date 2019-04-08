import React from 'react';

function IPhone10({ autoplay, publicKey }) {
  return (
    <div className="device-container">
      <h3>IPhone X</h3>
      <iframe
        src={`https://appetize.io/embed/${publicKey}?device=iphonex&scale=50&autoplay=${autoplay}&orientation=portrait&deviceColor=black`}
        width="205px"
        height="423px"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}

export default IPhone10;
