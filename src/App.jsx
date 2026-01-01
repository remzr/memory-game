import { Activity, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Heading from './components/Heading';
import Intro from './components/Intro';

function App() {
  const [characters, setCharacters] = useState([{id:0,name:"loading",imageSrc:"loading"},{id:1,name:"loading",imageSrc:"loading"},{id:2,name:"loading",imageSrc:"loading"},{id:3,name:"loading",imageSrc:"loading"},{id:4,name:"loading",imageSrc:"loading"},{id:5,name:"loading",imageSrc:"loading"},{id:6,name:"loading",imageSrc:"loading"},{id:7,name:"loading",imageSrc:"loading"},{id:8,name:"loading",imageSrc:"loading"},{id:9,name:"loading",imageSrc:"loading"},{id:10,name:"loading",imageSrc:"loading"},{id:11,name:"loading",imageSrc:"loading"}]);
  const [error, setError] = useState(null);
  const [cardList, setCardList] = useState(null);
  const [isShowingIntro, setIsShowingIntro] = useState(true);
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);

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

  //Update function to initially load or reload cards. Always shuffles the deck.
  function updateCards() {
    //Shuffle character cards
    shuffle(characters);

    //Hide intro element
    setIsShowingIntro(false);

    //Create cards with updated order
    setCardList(characters.map(characters => 
      <Card key={characters.id} 
            cardId={characters.id} 
            cardTitle={characters.name} 
            imageSrc={characters.image} 
            updateCards={updateCards}
            gameChecker={gameChecker}
      />
    ));
  }

  //Updates scoreboard and resets points on wrong guess
  function gameChecker(id) {
    console.log(id)
  }

  return (
    <>
      <Heading points={points} highScore={highScore}/>
      {isShowingIntro && (
        <Intro updateCards={updateCards} />
      )}
      <main>{cardList}</main>
    </>
  )
}

export default App