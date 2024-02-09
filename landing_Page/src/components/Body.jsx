import React from 'react'
import RandomThoughts from './RandomThingsGenerator';

export default function Body() {
  return (
    <>
    <div id='content'>
      <h1>
        <RandomThoughts />
      </h1>
    </div>
    </>
  )
}
