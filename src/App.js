import React, { useState } from 'react';
import IPhone8 from './components/IPhone8';
import IPhone10 from './components/IPhone10';
import Nexus5 from './components/Nexus5';
import Nexus9 from './components/Nexus9';

function App() {
  const [iosPublicKey, setIosPublicKey] = useState(
    'zznmxtj0k5z1czrwm129qgckmm'
  );
  const [androidPublicKey, setAndroidPublicKey] = useState(
    'g0jthyryw2b433cyju3fwv8r5c'
  );
  const [isReady, setIsReady] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    setIsReady(true);
  };

  const toggleAutoplay = () => setIsAutoplay(!isAutoplay);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <label className="form-field">
          IOS Public Key
          <input
            name="iosPublicKey"
            type="password"
            value={iosPublicKey}
            onChange={evt => setIosPublicKey(evt.target.value)}
            placeholder="Enter IOS public key"
          />
        </label>
        <label className="form-field">
          Android Public Key:
          <input
            name="androidPublicKey"
            type="password"
            value={androidPublicKey}
            onChange={evt => setAndroidPublicKey(evt.target.value)}
            placeholder="Enter Android public key"
          />
        </label>
        <label className="form-field">
          Autoplay (careful about the minutes!)
          <input
            type="checkbox"
            checked={isAutoplay}
            onChange={toggleAutoplay}
          />
        </label>
        <input type="submit" value="Ready, set go." />
      </form>
      {isReady && (
        <div className="devices">
          <div className="phones">
            <IPhone8 autoplay={isAutoplay} publicKey={iosPublicKey} />
            <IPhone10 autoplay={isAutoplay} publicKey={iosPublicKey} />
            <Nexus5 publicKey={androidPublicKey} autoplay={isAutoplay} />
          </div>
          <div className="tablets">
            <Nexus9 autoplay={isAutoplay} publicKey={androidPublicKey} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
