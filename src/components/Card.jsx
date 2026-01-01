
import { useState } from 'react'

function Card({cardTitle, imageSrc, updateGame}) {

  return (
    <button className="card" onClick={updateGame}>
      <img src={imageSrc} alt="" />  
      <h2>{cardTitle}</h2>
    </button>
  )
}

export default Card
