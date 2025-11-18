import React from 'react';
import style from './Pagefive.module.css';
import imgback from '../../assets/imges/back.png';
import imgback1 from '../../assets/imges/back1.png';
import img from '../../assets/imges/Frame 988.png';
export default function Pagefive() {
return (
    <>
        <div className={style.container}>
            <img className={style.imgback} src={imgback} alt="" />
            <img className={style.imgback1} src={imgback1} alt="" />
            <div className={style.contant}>
                <div className={style.text}>
                    <p className={style.pragh}>TESTIMONIALS</p>
                    <h1>What peole say about us?</h1>
                </div>
                <img className={style.photes} src={img} alt="" />
            </div>
        </div>
        
    </>
  )
}
