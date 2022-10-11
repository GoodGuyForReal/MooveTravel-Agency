import React from 'react'
import './Button.css'

function Button() {
    return (
        <button className='ghost-btn'>Get Started</button>
    )
}

function PrButton() {
    return (
        <button className='primary-btn'>Search Place</button>
    )
}

export {Button , PrButton};