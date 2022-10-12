import React from 'react'
import './Cstyle.css'
import { PrButton , Button } from '../button/Button.jsx';
import CVideo from'../assets/C.mp4'


const C = () => {
    return (
        <section className='Cmain'>
            <div className="Cbody">
                <div className='CbL'>
                    <h1 className='Ctitle'>Discover a New Cultures of The World</h1>
                    <p className='Calttext'>Travel agency is more than just a place to book your travel needs, it's a one-stop shop for all your planning needs. We want to help you with everything from finding the perfect location.</p>
                    <div className='Cbtns'>
                    <PrButton />
                    <Button/>
                    </div>
                </div>
                <div className='CbR'>
                    <div className='CvB'>
                    <video src={CVideo} autoPlay loop muted className='bgvideoSearch'></video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default C