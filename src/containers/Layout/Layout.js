import React from "react";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// Should destructure component on import to keep it consistent with other parts of the app as well as react conventions for stateful components
class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };
//implicit return
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  //implicit return for both the function and the set state
  sideDrawerToggleHandler = () => {
    this.setState((prevState)=>{
      return {showSideDrawer: !prevState.showSideDrawer}
    })}
  

  render() {
        //destructure fragment on line1 and destructure state/props
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styles.content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
