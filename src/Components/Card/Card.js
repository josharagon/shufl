import './Card.css'


function Card({ value, suit, color }) {

  return (
    <div className={`card ${color}`}>
      <div className='top-left'>
        <div className='corner-val'>{value}</div>
        <div className='corner-suite'>{suit}</div>
      </div>
      <div className='bottom-right'>
        <div className='corner-val'>{value}</div>
        <div className='corner-suite'>{suit}</div>
      </div>
    </div>
  )
}

export default Card;