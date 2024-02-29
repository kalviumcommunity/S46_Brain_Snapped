import React, { useState } from 'react';
import snappedData from './randomThings';

const RandomThingsGenerator = () => {
  const [randomThing, setRandomThing] = useState(snappedData[0]);

  const generateRandomThings = () => {
    const randomIndex = Math.floor(Math.random() * snappedData.length);
    setRandomThing(snappedData[randomIndex]);
  };

  return (
    <div>
        <h2>{randomThing.userName},</h2>
        <p className="snappedData">{randomThing.randomThing}</p>
        <button className='randombutton' onClick={generateRandomThings}>Random Things</button>
    </div>
  );
};

export default RandomThingsGenerator;