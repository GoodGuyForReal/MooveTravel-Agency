import React from 'react'
import'./cardstyle.css'
const Card = () => {
  return (
    <div className="card">
    <div className="cardBody">
      <img src="" alt="" className='cardimg' />
      <h5 className='cardTitle'>Nusa Pandia</h5>
      <div className='cardDes'>
        <p className='cardLoc'>indonesia</p>
        <p className='cardPrice'><span className='cardPricespan'>24$/</span>Person</p>
      </div>
    </div>
  </div>
  )
}

export default Card