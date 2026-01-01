import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [characters, setCharacters] = useState(null);
  const [cardTitle, setCardTitle] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);  

  //Fetch data and cache it in const
  const characterData = () => {
    return fetch("https://rickandmortyapi.com/api/character/1,12,21,24,124,455,234,324,6,99,122,600,543,211,256,743")
      .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP-Error: ${response.status}`);
      }
        return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => { 
      console.log("Fetch error:", error);
      throw error;
    });
  }
  
  //Assigne fetched data to character hook
  useEffect(() => {
    characterData()
      .then((data) => {
        console.log(data);
        setCharacters(data);
      })
      .catch(setError);
  }, []);

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