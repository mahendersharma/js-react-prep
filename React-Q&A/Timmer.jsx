import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [watch, setWatch] = useState(0);
  const [watchStart, setWatchStart] = useState(false);

  useEffect(() => {
    let handleID;
    if (watchStart) {
      handleID = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(handleID);
  }, [watchStart]);

  const hanleStart = () => {
    setWatchStart(true);
  };

  const hanleStop = () => {
    setWatchStart(false);
  };

  const handleRestart = () => {
    setWatchStart(true);
    setWatch(0);
  };

  return (
    <div>
      {watch}
      <br />
      <button onClick={hanleStart}>Start</button>
      <button onClick={hanleStop}>Stop</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
