import { useState } from 'react'

function Card({cardId, cardTitle, imageSrc, updateCards, gameChecker}) {

  function handleClick() {
    updateCards();
    gameChecker({cardId});
  }

  return (
    <button id={cardId} className="card" onClick={handleClick}>
      <img src={imageSrc} alt={cardTitle}/>  
      <h2>{cardTitle}</h2>
    </button>
  )
}

export default Card
