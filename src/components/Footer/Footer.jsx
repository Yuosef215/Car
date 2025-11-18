import React from 'react'
import style from './Footer.module.css'
import icon from '../../assets/imges/Frame (2).png';
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




export default function Footer() {
return (
    <>
        <div className={style.container}>
            <div className={style.seconde}>
                <div className={style.right}>
                    <img src={icon} alt="" /><span> RENTCARS</span><br /><br />
                    <FiMapPin size={24} color="#D0D5DD" /><span> 25566 Hc 1, Glenallen, Alaska, 99588, USA</span><br />
                    <FiPhone size={24} color="#D0D5DD" /><span> +603 4784 273 12</span><br />
                    <FiMail size={24} color="#D0D5DD" /><span> rentcars@gmail.com</span><br />
                </div>
                <div className={style.sec}>
                    <h4>Our Product</h4>
                    <a href="#"><p>Career</p></a>
                    <a href="#"><p>Car</p></a>
                    <a href="#"><p>Packages</p></a>
                    <a href="#"><p>Features</p></a>
                    <a href="#"><p>Priceline</p></a>
                </div>
                <div className={style.three}>
                    <h4>Resources</h4>
                    <a href="#"><p>Download</p></a>
                    <a href="#"><p>Help Centre</p></a>
                    <a href="#"><p>Guides</p></a>
                    <a href="#"><p>Partner Network</p></a>
                    <a href="#"><p>Cruises</p></a>
                    <a href="#"><p>Developer</p></a>
                </div>
                <div className={style.four}>
                    <h4>Our Product</h4>
                    <a href="#"><p>Career</p></a>
                    <a href="#"><p>Car</p></a>
                    <a href="#"><p>Packages</p></a>
                    <a href="#"><p>Features</p></a>
                    <a href="#"><p>Priceline</p></a>
                </div>
                <div className={style.five}>
                    <h4>Follwo us</h4>
                    <div className={style.Footer_icon}>
                        <a href="www.facebook.com" target='_blank'><FaFacebook size={28} color="#D0D5DD" /></a> 
                        <a href="#"><FaYoutube size={28} color="#D0D5DD" /></a>
                        <a href="#"><FaInstagram size={28} color="#D0D5DD" /></a>
                    </div>
                </div>
            </div>
            <hr />
            <h4 className={style.footer_end}>Copyright 2023 ・ Rentcars, All Rights Reserved</h4>
        </div>
    </>
)
}
