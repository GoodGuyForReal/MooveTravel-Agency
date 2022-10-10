import React from 'react'

function Navbar() {
    return (
        <nav className='nav'>
            <a href='#' className='nav-logo'>TRVL</a>
            <ul>
                <li className='active'>
                    <a href='#' className='Home'>Home</a>
                </li>
                <li>
                    <a href='#' className='Home'>About Us</a>
                </li>
                <li>
                    <a href='#' className='Home'>Pricing</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar