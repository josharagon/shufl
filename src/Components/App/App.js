import './App.css';
import { Component } from 'react';
import Deck from '../Deck/Deck.js';
import cardData from '../../cardData.js';
import createAllCards from '../../createAllCards'

class App extends Component {

  constructor() {
    super()
    this.state = {
      cards:[]
    }
  }

  componentDidMount() {
    this.setState({cards: createAllCards(cardData)})
  }

  shuffleCards(cardArray) {
    for (let i = cardArray.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      let temp = cardArray[i];
      cardArray[i] = cardArray[randomIndex];
      cardArray[randomIndex] = temp;
    }
    this.setState({cards: cardArray})
  }

  render() {
    return (
      <main>
        <button onClick={() => this.shuffleCards(this.state.cards)}>Shuffle</button>
        <Deck cards={this.state.cards} />
      </main>
    )
  }
}

export default App;
