import React from 'react'

function Navbar() {
    return (
        <nav className='nav'>
            <a href='#' className='nav-logo'>MOOVE.</a>
            <ul>
                <li className='active'>
                    <a href='#' className='nav-item'>Home</a>
                </li>
                <li>
                    <a href='#' className='nav-item'>About Us</a>
                </li>
                <li>
                    <a href='#' className='nav-item'>Pricing</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar