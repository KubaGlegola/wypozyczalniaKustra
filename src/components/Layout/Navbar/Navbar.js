import React from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  );
};

export default Navbar;
