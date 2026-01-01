import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [characters, setCharacters] = useState([{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"},{name:"loading",imageSrc:"loading"}]);
  const [error, setError] = useState(null);
  let cardList;  

  //Fetch data and cache it in const
  const characterData = () => {
    return fetch("https://rickandmortyapi.com/api/character/1,12,21,24,124,455,234,324,6,99,122,600")
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

  //Fisher-Yates shuffle algorythm
  function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateGame() {
    //Shuffle character cards
    shuffle(characters);
    console.log(characters);

    //Create cards with updated order
    cardList = characters.map(<Card cardTitle={characters[0].name} imageSrc={characters[0].image}/>);
  }

  return (
    <>
      <h1>Rick and Morty: Memory Game</h1>
      <main>
        <Card cardTitle={characters[0].name} imageSrc={characters[0].image} updateGame={updateGame}/>
        <Card cardTitle={characters[1].name} imageSrc={characters[1].image} updateGame={updateGame}/>    
        <Card cardTitle={characters[2].name} imageSrc={characters[2].image} updateGame={updateGame}/>
        <Card cardTitle={characters[3].name} imageSrc={characters[3].image} updateGame={updateGame}/> 
        <Card cardTitle={characters[4].name} imageSrc={characters[4].image} updateGame={updateGame}/>
        <Card cardTitle={characters[5].name} imageSrc={characters[5].image} updateGame={updateGame}/> 
        <Card cardTitle={characters[6].name} imageSrc={characters[6].image} updateGame={updateGame}/>
        <Card cardTitle={characters[7].name} imageSrc={characters[7].image} updateGame={updateGame}/> 
        <Card cardTitle={characters[8].name} imageSrc={characters[8].image} updateGame={updateGame}/>
        <Card cardTitle={characters[9].name} imageSrc={characters[9].image} updateGame={updateGame}/>
        <Card cardTitle={characters[10].name} imageSrc={characters[10].image} updateGame={updateGame}/>  
        <Card cardTitle={characters[11].name} imageSrc={characters[11].image} updateGame={updateGame}/>
      </main>
    </>
  )
}

export default App