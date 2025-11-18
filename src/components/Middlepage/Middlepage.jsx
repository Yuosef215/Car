import React from "react";
import style from "./Middlepage.module.css";
import axios from 'axios';
import  { useEffect , useState } from 'react';
import bmw from '../../assets/imges/BMW.png';
import { Link } from "react-router-dom";
import { GiThermometerCold } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { IoLogoModelS } from "react-icons/io";




export default function Middlepage() {

  const [carslist, setcarslist] = useState([]);

  
  useEffect(() => {
    
    let getcars =async () => {
      let respons =await axios.get('https://myfakeapi.com/api/cars/');
      setcarslist(respons.data.cars)
    }
    getcars();
  
  
  }, [])

  const firstFour = carslist.slice(0, 4);

  return (
    <>
      <div className="header">
        <div className={style.sec}>
          <div className={style.search}>
            <input type="search" placeholder="search for cars..." />
            <a href="">Search</a>
          </div>
        </div>
        <div className={style.Parents}>
          <div className={style.Middlepage}>
            <div className={style.parentp}>
              <p className={style.prgh}>POPULAR RENTAL DEALS</p>
            </div>
            <h1>Most popular cars rental deals</h1>
          </div>
        </div>
        <div className={style.middle}>
          {firstFour.map(car =>
            <div className={style.card}>
                <img className={style.bmw} src={bmw} alt="" />
              <h3 className={style.title}>{ car.car}</h3>
      <div className=''>
        <p><FaPerson /> 4 passgener</p>
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
        <div className={style.btn_morecars}>
          <Link to={'/allcars'}>Show all vehicles →</Link>
        </div>
      </div>
    </>
  );
};
