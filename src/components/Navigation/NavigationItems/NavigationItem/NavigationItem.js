import React from "react";
import styles from "./NavigationItem.module.css";

//implicit returns + destructure props
// ternaries will null are an anti-pattern. There is a light weight library called classNames that you should look into that allows you to easily add dynamic classes to your nodes
const navigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <a href={props.link} 
        className={props.active ? styles.active : null}
      >
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
