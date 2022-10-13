import React from 'react'
import Card from '../card/Card'
import Mainstyle from './Main.module.css'
import data from '../util/data.js'

const Main = () => {
  return (
    <section className={Mainstyle.main}>
      <div className={Mainstyle.mainBody}>
        <div className={Mainstyle.mainheader}>
          <h2 className={Mainstyle.mainTitle}>Popular Destinaitons by Moove.</h2>
          <div className={Mainstyle.mainright}>
            <h4 className={Mainstyle.MainTtilealttext}><span className={Mainstyle.mainSpanTitle}>1000+</span> Destinaitons</h4>
            <div className={Mainstyle.mainHdrAltText}>
              <p className={Mainstyle.mainText}>These are the most popular destinaitons today.There are 1k destinaitons waiting for you, let's finish it now!</p>
            </div>
          </div>
        </div>
        <div className={Mainstyle.maincardlist}>
          <div className={Mainstyle.maincardlistBody}>

            {
              data.map(data => {
                const { id, title, image , loc } = data;
                //console.log(data);        
                return (<Card key={id} title={title} image={image} loc={loc} />)
              })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Main