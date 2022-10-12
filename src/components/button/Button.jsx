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


function GooglePlay() {
    return (
        <div className="GooglePlay">
        <button className='GooglePlaybtn'>Google Play Store</button>
        </div>
    )
}

function AppStore() {
    return (
        <div className="AppStore">
        <button className='AppStorebtn'>App Store</button>
        </div>
    )
}

export {Button , PrButton ,GooglePlay , AppStore};