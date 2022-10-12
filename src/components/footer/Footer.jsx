import React from 'react'
import './Footerstyle.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerBody">
                <div>
                    <h1>Moove.</h1>
                    <p className='FooterAlttext'>Move.com is an online travel agency that plans every detail of your travel experience. Whether you want to plan a romantic trip, family vacation or business trip, Move.com is here to help with hot deals and the best prices.</p>
                </div>
                <div>
                    <h4>About</h4>
                    <p className='FooterAlttext'>About Us</p>
                    <p className='FooterAlttext'>Destinations</p>
                    <p className='FooterAlttext'>testimonios</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <p className='FooterAlttext'>FAQ</p>
                    <p className='FooterAlttext'>Blog and Media</p>
                </div>
                <div>
                    <h4>Get in Touch</h4>
                    <p className='FooterAlttext'>+00 000 000 00</p>
                    <p className='FooterAlttext'>mooveinfo.@mooveinfo.com</p>
                </div>
            </div>
            <div className="copyrights">
                <p>Moove.com</p>
                <a href="">Terms & Conditions - Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer 