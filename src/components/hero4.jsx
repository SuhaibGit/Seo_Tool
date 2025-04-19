import React, { useState, useEffect } from 'react';
import "../styling/style.css"

function Hero4() {
  const rows = 9;
  const cols = 14;
  const totalBoxes = rows * cols;
  const [color1Boxes, setColor1Boxes] = useState([]);
  const [color2Boxes, setColor2Boxes] = useState([]);
  useEffect(() => {
    const numBoxesColor1 = Math.floor(Math.random() * 5) + 5;
    const boxesColor1 = new Set();
    while (boxesColor1.size < numBoxesColor1) {
      const randomIndex = Math.floor(Math.random() * totalBoxes);
      if (!boxesColor1.has(randomIndex)) {
        boxesColor1.add(randomIndex);
      }
    }
    const numBoxesColor2 = Math.floor(Math.random() * 4) + 4;
    const boxesColor2 = new Set();
    while (boxesColor2.size < numBoxesColor2) {
      const randomIndex = Math.floor(Math.random() * totalBoxes);
      if (!boxesColor1.has(randomIndex) && !boxesColor2.has(randomIndex)) {
        boxesColor2.add(randomIndex);
      }
    } 
    setColor1Boxes(Array.from(boxesColor1));
    setColor2Boxes(Array.from(boxesColor2));
  }, []);
  const getBoxColor = (index) => {
    if (color1Boxes.includes(index)) return '#015668';
    if (color2Boxes.includes(index)) return '#363f44';
    return '#ffd369';
  };

  return (
    <div className='hero4-m'>
      <div className='h4-s' >
        <div className='h4-ss' >
          {Array.from({ length: totalBoxes }).map((_, index) => (
            <div className='h4-under'
              key={index}
              style={{
                backgroundColor: getBoxColor(index),
              }}
            >
            </div>
          ))}
        </div>
      </div>
      <div className='boxed'>
        <h1>and audit gmb</h1>
        <p>Easily track and optimize your Google My Business profile performance</p>
        {/* <div className='just-button'>
          <button>Sign Up</button>
        </div> */}
      </div>
    </div>
  );
}

export default Hero4;