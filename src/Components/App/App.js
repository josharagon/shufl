import { useState } from 'react';
import './App.css';
import Deck from '../Deck/Deck.js';
import Card from '../Card/Card.js';
import cardData from '../../cardData.js';
import createAllCards from '../../createAllCards'

function App() {
  const [cards, setCards] = useState([])

  createAllCards(cardData, cards, setCards);

  return(
    <main>
      Deck
    </main>
  )
}

export default App;
