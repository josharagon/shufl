import './Card.css'


function Card() {

  return (
    <div className='card'>
      <div className='top-left'>
        <div className='corner-val'>4</div>
        <div className='corner-suite'>♠︎</div>
      </div>
      <div className='bottom-right'>
        <div className='corner-val'>4</div>
        <div className='corner-suite'>♠︎</div>
      </div>
    </div>
  )
}

export default Card;