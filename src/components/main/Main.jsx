import React from 'react'
import Mainstyle from './Main.module.css'


const Main = () => {
  return (
<section className={Mainstyle.main}>
    <div className="mainBody">
        <div className={Mainstyle.mainheader}>
          <h2 className={Mainstyle.mainTitle}>Popular Destinaitons by Moove.</h2>
          <div className={Mainstyle.mainright}>
            <h4 className={Mainstyle.MainTtilealttext}><span className={Mainstyle.mainSpanTitle}>1000+</span> Destinaitons</h4>
            <div className={Mainstyle.mainHdrAltText}>
              <p className={Mainstyle.mainText}>These are the 4 most popular destinaitons today.There are 1k destinaitons waiting for you, let's finish it now!</p>
            </div>
          </div>
        </div>
    </div>
</section>
  )
}

export default Main