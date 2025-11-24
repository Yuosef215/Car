import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/imges/Frame (1).png";
import car from "../../assets/imges/car.png";
import shape from "../../assets/imges/Frame.png";

export default function Home() {
  return (
    <div className={styles.header}>
      <img className={styles.img2} src={shape} alt="" />
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <span>RENTCARS</span>
        </div>
        <ul className={styles.center}>
          <li>
            <a href="#">Become a renter</a>
          </li>
          <li>
            <a href="#">Rental deals</a>
          </li>
          <li>
            <a href="#">How it work</a>
          </li>
          <li>
            <a href="#">Why choose us</a>
          </li>
        </ul>
        <div className={styles.right}>
          <Link to={"/sign_in"} className={styles.link}>
            <a className={styles.signin} href="#">
              Sign in
            </a>
          </Link>
          <Link to={"/sign_up"} className={styles.link}>
            <a className={styles.signup} href="#">
              Sign up
            </a>
          </Link>
        </div>
      </nav>
      <section className={styles.main}>
        <div>
          <h1 className={styles.textmain}>
            Find, book and <br />
            rent a car <span>Easily</span>
          </h1>
          <p className={styles.text}>
            Get a car wherever and whenever you need it with your IOS and
            Android device.
          </p>
        </div>
        <div className={styles.car}>
          <img src={car} alt="" />
        </div>
      </section>
    </div>
  );
}
