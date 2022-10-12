import React from 'react'
import './Button.css'

function Button() {
    return (
        <div className="divbtnghost">
        <button className='ghost-btn'>Watch Trailer</button>
        </div>
    )
}

function PrButton() {
    return (
        <div className="divbtn">
        <button className='primary-btn'>Search Place</button>
        </div>
    )
}

export {Button , PrButton};