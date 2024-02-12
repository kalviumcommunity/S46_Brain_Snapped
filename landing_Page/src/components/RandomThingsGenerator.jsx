import React, { useState } from 'react';
import randomThings from './RandomThings';

const QuoteGenerator = () => {
  const [randomThing, setRandomThing] = useState(randomThings[0]);

  const generateRandomThings = () => {
    const randomIndex = Math.floor(Math.random() * randomThings.length);
    setRandomThing(randomThings[randomIndex]);
  };

  return (
    <div id='randoms'>
        <div className="random-generator">
            <p>{randomThing.userName},</p>
            <p>{randomThing.snappedData}</p>
            <button onClick={generateRandomThings}>Random Things</button>
        </div>
    </div>
  );
};

export default QuoteGenerator;
