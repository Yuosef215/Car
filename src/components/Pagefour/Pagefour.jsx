import React from 'react'
import style from './Pagefour.module.css'
import imgcar from '../../assets/imges/oudi.png';
import imgeback from '../../assets/imges/Vector.png';
import img1 from '../../assets/imges/icon1.png';
import img2 from '../../assets/imges/icon2.png';
import img3 from '../../assets/imges/icon3.png';
import img4 from '../../assets/imges/icon4.png';
export default function Pagefour() {
  return (
      <>
          <div className={style.container}>
              <section className={style.Left}>
                  <img className={style.car} src={imgcar} alt="" />
                  <img className={style.imgeback} src={imgeback} alt="" />
              </section>
              <section className={style.Right}>
                  <div className={style.text}>
                      <p>WHY CHOOSE US</p>
                      <h1>We offer the best experience <br /> with our rental deals</h1>
                  </div>
                  <div className={style.list}>
                      <div className={style.list1}>
                          <img className={style.img4} src={img4} alt="" />
                          <div className={style.col}>
                              <h3>Best price guaranteed</h3>
                              <p>Find a lower price? We’ll refund you 100% <br /> of the difference.</p>
                          </div>
                      </div>
                       <div className={style.list1}>
                          <img className={style.img4} src={img2} alt="" />
                          <div className={style.col}>
                              <h3>Experience driver</h3>
                              <p>Don’t have driver? Don’t worry, we have many <br /> experienced driver for you. of the difference.</p>
                          </div>
                      </div>
                       <div className={style.list1}>
                          <img className={style.img4} src={img1} alt="" />
                          <div className={style.col}>
                              <h3>24 hour car delivery</h3>
                              <p>Book your car anytime and we will deliver itdirectly to you.</p>
                          </div>
                      </div>
                       <div className={style.list1}>
                          <img className={style.img4} src={img3} alt="" />
                          <div className={style.col}>
                              <h3>24/7 technical support</h3>
                              <p>Have a question? Contact Rentcars support <br /> any time when you have problem. of the difference.</p>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </>
  )
}
