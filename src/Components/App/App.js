import { useState, useEffect } from 'react';
import './App.css';
import Deck from '../Deck/Deck.js';
import Card from '../Card/Card.js';
import cardData from '../../cardData.js';
import createAllCards from '../../createAllCards'

function App() {
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    createAllCards(cardData, cards, setCards);
  });

  return(
    <main>
      <Deck cards={cards}/>
    </main>
  )
}

export default App;
