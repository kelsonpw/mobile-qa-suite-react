import React from 'react';
import BaseDeviceComponent from './BaseDeviceComponent';

function Nexus9({ autoplay, publicKey }) {
  return (
    <BaseDeviceComponent
      autoplay={autoplay}
      publicKey={publicKey}
      width={'433px'}
      height={'644px'}
      device={'nexus9'}
    />
  );
}

export default Nexus9;
