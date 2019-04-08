import React from 'react';
import BaseDeviceComponent from './BaseDeviceComponent';

function IPhone10({ autoplay, publicKey }) {
  return (
    <BaseDeviceComponent
      autoplay={autoplay}
      publicKey={publicKey}
      width={'205px'}
      height={'423px'}
      device={'iphonex'}
    />
  );
}

export default IPhone10;
