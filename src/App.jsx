import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [characters, setCharacters] = useState(null);
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
      //Call fetch function to store data in characters hook
      .then((data) => {
        //console.log(data);
        setCharacters(data);
      })
      .catch(setError);
  }, []);

  function updateGame() {
    console.log(listItems);
  }

  return (
    <>
      <h1>Memory-Game</h1>
      <main>
        <Card cardTitle={characters[0].name} imageSrc={characters[0].image}/>
        <Card cardTitle={characters[1].name} imageSrc={characters[1].image}/>    
        <Card cardTitle={characters[2].name} imageSrc={characters[2].image}/>
        <Card cardTitle={characters[3].name} imageSrc={characters[3].image}/> 
        <Card cardTitle={characters[4].name} imageSrc={characters[4].image}/>
        <Card cardTitle={characters[5].name} imageSrc={characters[5].image}/> 
        <Card cardTitle={characters[6].name} imageSrc={characters[6].image}/>
        <Card cardTitle={characters[7].name} imageSrc={characters[7].image}/> 
        <Card cardTitle={characters[8].name} imageSrc={characters[8].image}/>
        <Card cardTitle={characters[9].name} imageSrc={characters[10].image}/> 
        <Card cardTitle={characters[11].name} imageSrc={characters[11].image}/>
        <Card cardTitle={characters[12].name} imageSrc={characters[12].image}/> 
        <Card cardTitle={characters[13].name} imageSrc={characters[13].image}/>
        <Card cardTitle={characters[14].name} imageSrc={characters[14].image}/> 
        <Card cardTitle={characters[15].name} imageSrc={characters[15].image}/>
      </main>
    </>
  )
}

export default App