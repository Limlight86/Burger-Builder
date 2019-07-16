import React from 'react'
import styles from './DrawerToggle.module.css'

//implicit return and destructure props
const drawerToggle = props => {
  return(
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default drawerToggle