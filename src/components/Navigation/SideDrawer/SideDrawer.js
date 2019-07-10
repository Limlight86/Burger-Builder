import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItgems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  return (
    <div className={styles.SideDrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItgems />
      </nav>
    </div>
  );
};

export default sideDrawer;
