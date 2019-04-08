import React from 'react';

function BaseDeviceComponent({ autoplay, device, height, publicKey, width }) {
  return (
    <div className="device-container">
      <h3>{device.toUppercase()}</h3>
      <iframe
        src={`https://appetize.io/embed/${publicKey}?device=${device}&scale=50&autoplay=${autoplay}&orientation=portrait&deviceColor=black`}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
}

export default BaseDeviceComponent;
