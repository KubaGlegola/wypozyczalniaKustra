import React from "react";
import classes from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      {props.isMobile ? <MobileMenu /> : <Menu />}
    </nav>
  );
};

export default Navbar;
