import Card from '../Card/Card.js';


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
    <>
    {allCards}
    </>
  )
}

export default Deck;