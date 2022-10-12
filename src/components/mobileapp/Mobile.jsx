import React from 'react'
import './Mobile.css';
import Mobileimg from '../assets/MobileApp.png'
 
const Mobile = () => {
    return (
        <section className='Mobile'>
            <div className="MobileBody">
                <div className='Mimgd'>
                    <img src={Mobileimg} className='MobileImg' alt="" />
                </div>
                <div>
                    <h1>Download and Get Your First Journey!</h1>
                    <p>ownload the Moove.com mobile app for one-touch access to your next travel adventure. With the Moove.com mobile app you’ll get access to hidden features and special offers.</p>
                </div>
            </div>

        </section>
    )
}

export default Mobile