import React from 'react'
import RandomThings from './RandomThingsGenerator';

export default function Body() {
  return (
    <>
    <div id='content'>
      <h1>
        <RandomThings />
      </h1>
    </div>
    </>
  )
}
