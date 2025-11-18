import React from 'react'
import img1 from '../../assets/imges/🦆 icon _car_.png';
import img2 from '../../assets/imges/🦆 icon _car_ (1).png';
import img3 from '../../assets/imges/🦆 icon _car_ (2).png';
import style from './Pagethree.module.css';
import img4 from '../../assets/imges/Group.png'
import img5 from '../../assets/imges/Frame 25.png'
import img6 from '../../assets/imges/Frame 26.png'
import img7 from '../../assets/imges/Frame 27.png'
export default function Pagethree() {
  return (
      <>
          <div className={style.boos}>
              <div className={style.texthead}>
                  <p>HOW IT WORK</p>
              </div>
              <div className={style.text2}>
                  <p>Rent with following 3 working steps</p>
              </div>
              <article>
              <div className={style.icons}>
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
              </div>
              <div className={style.shape}>
                  <h3 className="textp">Choose location</h3>
                  <h3 className="textp">Pick-up date</h3>
                  <h3 className="textp">Book your car</h3>
              </div>
              <div className={style.desc}>
                <p>Choose your and find your best car</p>
                <p>Select your pick up date and time to book your car</p>
                <p>Book your car and we will deliver it directly to you</p>
              </div>
              </article>
              <div className={style.slider}>
  <div className={style.slide_track}>
    <img src={img4} />
    <img src={img5} />
    <img src={img6} />
    <img src={img7} />

    <img src={img4} />
    <img src={img5} />
    <img src={img6} />
    <img src={img7} />
  </div>
</div>

          </div>
    </>
  )
}
