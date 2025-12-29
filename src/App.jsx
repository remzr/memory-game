import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [characters, setCharacters] = useState([null]);
  const [cardTitle, setCardTitle] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  //Fetch character data on App load and save it to characters hook

  return (
    <>
      <h1>Memory-Game</h1>
      <main>
        <Card cardTitle={cardTitle} imageSrc={imageSrc} />
        <Card />
        <Card />
        <Card />        
        <Card />
        <Card />             
      </main>
    </>
  )
}

export default App
