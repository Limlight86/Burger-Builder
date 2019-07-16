import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItgems from "../NavigationItems/NavigationItems";
import Backdrop from '../../UI/Backdrop/Backdrop'

// destructure props and Fragment
const sideDrawer = props => {
    /* 
    const attachedClasses = [styles.SideDrawer, open ? styles.Open : styles.Close]
    although you're joining this later and join is O(N) 
    Its prolly best to just do 
    const attachedClasses = `${styles.SideDrawer} ${open ? styles.Open : styles.Close}`
  */
  let attachedClasses = [styles.SideDrawer, styles.Close]

  if(props.open){
    attachedClasses = [styles.SideDrawer, styles.Open]
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItgems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
