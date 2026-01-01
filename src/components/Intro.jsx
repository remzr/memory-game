import { useState } from 'react'

function Intro({updateCards}) {

  return (
    <div id="intro">
        <p id="introText">Pick each image once and collect points.</p>
        <button id="introButton" onClick={updateCards}>Start Game</button>
    </div>
  )
}

export default Intro