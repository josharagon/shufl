import Card from '../Card/Card.js';
import './Deck.css'

function Deck({cards}) {

  const allCards = cards.map(card => {
    return (
      <Card 
        value={card.value}
        suit={card.suit}
        color={card.color}
        key={card.value+card.suit}
      />
    )
  })

  return (
    <div className='deck-holder'>
      {allCards}
    </div>
  )
}

export default Deck;