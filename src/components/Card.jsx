
import { useState } from 'react'

function Card({cardTitle, imageSrc}) {

  return (
    <div className="card">
      <img src={imageSrc} alt="" />  
      <h2>{cardTitle}</h2>
    </div>
  )
}

export default Card
