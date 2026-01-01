import { useState } from 'react'

function Intro({updateGame}) {

  return (
    <>
        <p id="introText">Pick each image once and collect points.</p>
        <button id="introButton" onClick={updateGame}>Start Game</button>
    </>
  )
}

export default Intro