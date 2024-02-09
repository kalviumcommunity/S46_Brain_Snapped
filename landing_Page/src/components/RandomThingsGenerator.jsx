// src/components/QuoteGenerator.js
import React, { useState } from 'react';
import quotes from './RandomThings';

const QuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div id='quotes'>
        <div className="quote-generator">
            <p id='quoteline'>{randomQuote}</p>
            <button onClick={generateRandomQuote}>Random Things</button>
        </div>
    </div>
  );
};

export default QuoteGenerator;
