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
        <p>{randomThing.userName},</p>
        <p>{randomThing.randomThing}</p>
        <button onClick={generateRandomThings}>Random Things</button>
    </div>
  );
};

export default RandomThingsGenerator;
