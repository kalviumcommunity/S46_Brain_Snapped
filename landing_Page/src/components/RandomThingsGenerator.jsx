// src/components/QuoteGenerator.js
import React, { useState } from 'react';
import randomThings from './RandomThings';

const randomThingsGenerator = () => {
  const [randomThing, setRandomThing] = useState(randomThings[0]);

  const generateRandomThings = () => {
    const randomIndex = Math.floor(Math.random() * randomThings.length);
    setRandomThing(randomThings[randomIndex]);
  };

  return (
    <div id='randoms'>
        <div>
            <p id='randomline'>{randomThing}</p>
            <button onClick={generateRandomThings}>Random Things</button>
        </div>
    </div>
  );
};

export default randomThingsGenerator;
