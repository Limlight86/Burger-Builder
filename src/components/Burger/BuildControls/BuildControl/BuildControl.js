import React from "react";
import styles from "./BuildControl.module.css";
/*
 Same comments as buildControls. Implicit returns and destructuring of props
*/
const buildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
