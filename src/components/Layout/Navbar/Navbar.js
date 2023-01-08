import React from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      {isMobile ? <MobileMenu /> : <Menu />}
    </nav>
  );
};

export default Navbar;
