import '../styling/App.css';
import { useState, useEffect } from 'react';

export default function Slideshow() {
  const [flip, setFlip] = useState(false);
  const newsText = "Start for less than the price of lunch: $12/month";

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundColor = flip ? "#ffd369" : "#263f44";
  const colorSlide = flip ? "#263f44" : "#ffd369";

  return (
    <div style={{ backgroundColor: backgroundColor, color: colorSlide }} className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-move">
          <span className="ticker-text">{newsText}</span>
          <span className="ticker-text">{newsText}</span>
        </div>
      </div>
    </div>
  );
}