import { useState } from 'react'

function Card({cardId, cardTitle, imageSrc, updateGame}) {

  return (
    <button id={cardId} className="card" onClick={updateGame}>
      <img src={imageSrc} alt={cardTitle}/>  
      <h2>{cardTitle}</h2>
    </button>
  )
}

export default Card
