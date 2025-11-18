import React from 'react'
import style from './Pagesex.module.css'
import img from '../../assets/imges/Vector (1).png'
import img1 from '../../assets/imges/main.png'
import img2 from '../../assets/imges/iPhone 14 Pro.png';
export default function Pagesex() {
  return (
    <>
      <div className="container">
        <section className={style.left}>
          <img className={style.img} src={img} alt="" />
          <img className={style.img2} src={img1} alt="" />
          <img className={style.img3} src={img2} alt="" />
          <h1>Download Rentcars <br /> App for <span className={style.free}>FREE</span></h1>
          <p>For faster, easier booking and exclusive deals.</p>
          <form className={style.lists} action="">
            <input className={style.inbut} type="text" placeholder='Name' />
            <input className={style.inbut} type="phone"  placeholder='Phone Number' />
            <input className={style.inbut} type="email" placeholder='Email' /><br />
            <a className={style.btn} href=''>Send</a>
          </form>
        </section>
      </div>
    </>
  )
}
