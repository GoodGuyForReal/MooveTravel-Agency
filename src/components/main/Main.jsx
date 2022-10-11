import React from 'react'
import Mainstyle from './Main.module.css'


const Main = () => {
  return (
    <section className={Mainstyle.main}>
      <div className={Mainstyle.mainBody}>
        <div className={Mainstyle.mainheader}>
          <h2 className={Mainstyle.mainTitle}>Popular Destinaitons by Moove.</h2>
          <div className={Mainstyle.mainright}>
            <h4 className={Mainstyle.MainTtilealttext}><span className={Mainstyle.mainSpanTitle}>1000+</span> Destinaitons</h4>
            <div className={Mainstyle.mainHdrAltText}>
              <p className={Mainstyle.mainText}>These are the 4 most popular destinaitons today.There are 1k destinaitons waiting for you, let's finish it now!</p>
            </div>
          </div>
        </div>
        <div className="mainCard">
          <div className="card">
            <img src="" alt="" />
            <h5>Nusa Pandia</h5>
            <div>
              <p>indonesia</p>
              <p><span>24$/Person</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Main