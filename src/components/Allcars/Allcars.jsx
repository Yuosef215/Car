import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './Allcars.module.css'
import bmw from '../../assets/imges/BMW.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { GiThermometerCold } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { IoLogoModelS } from "react-icons/io";

export default function Allcars() {
  const navigate = useNavigate();
  const [carslist, setcarslist] = useState([]);
  
    
    useEffect(() => {
      
      let getcars =async () => {
        let respons =await axios.get('https://myfakeapi.com/api/cars/');
        setcarslist(respons.data.cars)
      }
      getcars();
    
    
    }, [])
  
    const firstFour = carslist.slice(0, 52);
  
  return (
    <>
      <div className={style.boos}>
        <div className={style.returne}>
          <a className={style.btn} href='#' onClick={() => navigate("/")}>Home</a><span>/Car</span>
        </div>
        <div className={style.text}>
          <p>POPULAR RENTAL DEALS</p>
          <h1>Most popular cars rental deals</h1>
        </div>
      <div className={style.middle}>
              {firstFour.map(car =>
                <div className={style.card}>
                    <img className={style.bmw} src={bmw} alt="" />
                  <h3 className={style.title}>{ car.car}</h3>
          <div className=''>
            <p><FaPerson /> 2 passgener</p>
            <p><IoLogoModelS /> Model {car.car_model}</p>
            <p><GiThermometerCold /> Air Conditioning</p>
          </div>
          <div className={style.priceBox}>
            <p className={style.priceTitle}>Price</p>
            <p className={style.price}>{car.price}</p>
            <span className={style.day}>/day</span>
          </div>
          <Link to={'/detiles'} className={style.rentBtn}>
               Rent Now →
            </Link>
        </div>
              )}
        </div>
        </div>
    </>
  )
}
