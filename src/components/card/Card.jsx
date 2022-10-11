import React from 'react'
import'./cardstyle.css'
const Card = ({title , image}) => {
  return (
    <div className="card">
    <div className="cardBody">
      <img src={image} alt="" className='cardimg' />
      <h5 className='cardTitle'>{title}</h5>
      <div className='cardDes'>
        <p className='cardLoc'>indonesia</p>
        <p className='cardPrice'><span className='cardPricespan'>24$/</span>Person</p>
      </div>
    </div>
  </div>
  )
}

export default Card