import React from 'react';
import BaseDeviceComponent from './BaseDeviceComponent';

function IPhone8({ autoplay, publicKey }) {
  return (
    <BaseDeviceComponent
      autoplay={autoplay}
      publicKey={publicKey}
      width={'208px'}
      height={'435px'}
      device={'iphone8'}
    />
  );
}

export default IPhone8;
