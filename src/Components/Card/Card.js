import './Card.css'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

const Card = ({ value, suit, color }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className='back' onClick={() => setFlipped(state => !state)} />
      <div className={`card ${color}`} onClick={() => setFlipped(state => !state)}>
        <div className='top-left'>
          <div className='corner-val'>{value}</div>
          <div className='corner-suite'>{suit}</div>
        </div>
        <div className='bottom-right'>
          <div className='corner-val'>{value}</div>
          <div className='corner-suite'>{suit}</div>
        </div>
      </div>
    </ReactCardFlip>
  )
}

export default Card;