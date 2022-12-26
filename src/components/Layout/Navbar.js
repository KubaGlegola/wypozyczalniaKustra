import React from "react";
import classes from "./Navbar.module.css";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GoAlert } from "react-icons/go";

const Navbar = () => {
  return (
    <navbar className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      <ul className={classes.menu}>
        <li>
          <a href="#" className={classes.menuItem}>
            <AiFillHome className={classes.icon} />
            Strona główna
          </a>
        </li>
        <li>
          <a href="#" className={classes.menuItem}>
            <MdLocalOffer className={classes.icon} />
            Oferta
          </a>
        </li>
        <li>
          <a href="#" className={classes.menuItem}>
            <AiFillMail className={classes.icon} />
            Kontakt
          </a>
        </li>
        <li>
          <a href="#" className={classes.menuItem}>
            <GoAlert className={classes.icon} />
            Regulamin
          </a>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
