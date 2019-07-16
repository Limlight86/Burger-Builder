import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

/*
  The only lifecycle this component is using is shouldComponentUpdate. Functional components have a version of this as well called memo.
  The usage is the opposite of componentShouldUpdate. You'd return false if you want the component to re-render.
  import React, { memo } from 'react'
  const Modal = memo(({  }) => (
    //modal return content 
  ), (prevProps, newProps) => prevProps.show === newProps.show)
*/
class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }
  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
