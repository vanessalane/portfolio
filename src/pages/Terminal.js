import React, { useState } from 'react';
import Typist from 'react-typist';

function Terminal(props) {
  const [showSuccess, setShowSuccess] = useState(false);

  const onTypingDone = async () => {
    window.setTimeout(function() {
      setShowSuccess(true);
    }, 1000);
    window.setTimeout(function() {
      props.history.push('/about');
    }, 2500);
  };

  return (
    <div className="terminal">
      <h1 className="terminal-text">
        <p><span className="color-blue">&#x203A;</span></p>
        <span>
          <Typist
            avgTypingDelay={100}
            stdTypingDelay={50}
            onTypingDone={onTypingDone}
            startDelay={100}
            cursor={{
              blink: true,
              hideWhenDone: true
            }}
          >
            <p><span className="color-blue">&#x203A;</span></p>
            <Typist.Delay ms={150}></Typist.Delay>
            <p><span className="color-blue">&#x203A;</span></p>
            <Typist.Delay ms={150}></Typist.Delay>
            <span className="pr-2 pr-md-4 color-blue">&#x203A;</span>
            <span className="color-white">meetVanessaLane();</span>
          </Typist>
        </span>
        {showSuccess && 
          <p className="color-green mt-3">Redirecting...</p>
        }
      </h1>
    </div>
  )
}

export default Terminal;