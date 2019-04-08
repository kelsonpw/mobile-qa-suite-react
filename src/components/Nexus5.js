import React from 'react';
import BaseDeviceComponent from './BaseDeviceComponent';

function Nexus5({ autoplay, publicKey }) {
  return (
    <BaseDeviceComponent
      autoplay={autoplay}
      publicKey={publicKey}
      width={'200px'}
      height={'398px'}
      device={'nexus5'}
    />
  );
}

export default Nexus5;
