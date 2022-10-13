import React from 'react'
import'./cardstyle.css'
const Card = ({title , image, loc}) => {

  let rndmprice = Math.floor(Math.random() * 1200) ;
  console.log(rndmprice)

  return (
    <div className="card">
    <div className="cardBody">
      <img src={image} alt="" className='cardimg' />
      <h5 className='cardTitle'>{title}</h5>
      <div className='cardDes'>
        <p className='cardLoc'>{loc}</p>
        <p className='cardPrice'><span className='cardPricespan'>{rndmprice}$/</span>Person</p>
      </div>
    </div>
  </div>
  )
}

export default Card