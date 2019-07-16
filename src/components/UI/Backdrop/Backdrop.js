import React from "react";
import styles from "./Backdrop.module.css";
/* implicit return and destructure props
  no ternary needed. you can just do 
  const backdrop = ({ sow, clicked }) => show && <div className={styles.Backdrop} onClick={clicked} />
*/
const backdrop = props => {
  return props.show ? <div 
  className={styles.Backdrop} 
  onClick={props.clicked}
  /> : null;
};

export default backdrop;
