import { useState } from 'react'

function Heading({points, highScore}) {

  return (
    <header>
      <h1>Rick and Morty: Memory Game</h1>
      <div>
        <p>Points: {points}</p>
        <p>Highscore: {highScore}</p>
      </div>
    </header>
  )
}

export default Heading