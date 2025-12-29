import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [characters, setCharacters] = useState[null];

  //Fetch character data on App load and save it to characters hook
  

  return (
    <>
      <h1>Memory-Game</h1>
      <main>
        <Card />
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
