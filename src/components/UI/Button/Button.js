import React from "react";
import styles from "./Button.module.css";
// destructure props / implicit return
// join() is O(N) so you could prolly just send those props down as a string to begin with instead of an array
const button = props => {
  return (
    <button
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
