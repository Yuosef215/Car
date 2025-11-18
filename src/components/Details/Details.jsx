import React from 'react'
import style from './Details.module.css'
import imgcar from '../../assets/imges/Audi 1.png'
import imgback from '../../assets/imges/Vector (2).png'
import { GiThermometerCold } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { IoLogoModelS } from "react-icons/io";
import { GiCarDoor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


export default function Details() {
    const navigate = useNavigate();

return (
    
    <>
        <div className={style.container}>
            <div className={style.returne}>
                <a className={style.btn} href='#' onClick={() => navigate("/")}>Home/</a>
                <a className={style.btn} href='#' onClick={() => navigate("/allcars")}>Cars</a><span>/Car</span>
            </div>
            <section className={style.left}>
                <img className={style.imgcar} src={imgcar  } alt="" />
                <img className={style.back} src={imgback} alt="" />
            </section>
            <section className='right'>
                <div className={style.text}>
                    <p>WHY CHOOSE US</p>
                    <h1>We offer the best experience <br /> with our rental deals</h1>
                </div>
                <div className={style.extra}>
                    <p><FaPerson size={30} /> 2 Passgener</p>
                            <p><GiCarDoor size={30} /> 2 Doors</p>
                        <p><GiThermometerCold size={30} /> Air Conditioning</p>
                </div>
            </section>
        </div>
    </>
)
}
