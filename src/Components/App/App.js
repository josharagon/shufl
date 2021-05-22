import './App.css';
import { Component } from 'react';
import Deck from '../Deck/Deck.js';
import cardData from '../../cardData.js';
import createAllCards from '../../createAllCards';


class App extends Component {

  constructor() {
    super()
    this.state = {
      cards:[],
      shuffleCounter:0
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
    this.setState({cards: cardArray, shuffleCounter: this.state.shuffleCounter+1})
  }

  render() {
    return (
      <main>
        <h1>SHUFL</h1>
        <div className='buttons'>
        <button onClick={() => this.shuffleCards(this.state.cards)}>Shuffle Deck</button>
        <button onClick={() => {this.setState({shuffleCounter: 0})}}>Reset Shuffle Count</button>
        </div>
        <h4 className='shuffle-counter'>Shuffle Count: {this.state.shuffleCounter}</h4>
        <Deck cards={this.state.cards} />
      </main>
    )
  }
}

export default App;
