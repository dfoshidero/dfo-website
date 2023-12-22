import React, { useState, useEffect } from 'react';
import "./AnalogClock.scss";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Use getUTCHours, getUTCMinutes, and getUTCSeconds for GMT time
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();

  const hourDegrees = ((hours % 12) + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="clock">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={`hour_${index}`}
          className="mark hour-mark"
          style={{ transform: `rotate(${index * 30}deg)` }}
        >
          <div className="mark-line" />
        </div>
      ))}
      {Array.from({ length: 60 }).map((_, index) => (
        <div
          key={`minute_${index}`}
          className="mark minute-mark"
          style={{ transform: `rotate(${index * 6}deg)` }}
        >
          <div className="minute-mark-line" />
        </div>
      ))}
      <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
      <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
      <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }} />
    </div>
  );
};

export default AnalogClock;
