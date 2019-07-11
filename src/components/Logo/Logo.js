import React from "react";
import BurgerLogo from "../../assets/Images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = props => {
  return (
    <div className={styles.Logo} style={{height: props.height}} onClick={props.clicked}>
      <img src={BurgerLogo} alt="myBurger" />
    </div>
  );
};

export default logo;
