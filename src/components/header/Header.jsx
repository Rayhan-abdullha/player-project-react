import React from "react";
import Button from "../Button/Button";
import styles from "./header.module.css";
import Banner from "../../assets/Banner.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked");
    navigate("/livematch");
  };
  return (
    <div className={`container header`}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            The Greatest <br />
            show on <br />
            the earth
          </h1>
          <p className={styles.info}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old
          </p>
          <Button onClick={handleClick}>Watch Live</Button>
        </div>
        <div className={styles.headerImg}>
          <img className={styles.img} src={Banner} alt="notfound" />
        </div>
      </div>
    </div>
  );
};

export default Header;
