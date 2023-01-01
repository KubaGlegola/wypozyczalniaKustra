import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  let menuHandler = document.querySelector("ul");
  console.log(menuHandler);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      //menuHandler.classList.add("showMenu");
    } else {
      //menuHandler.classList.add("showMenu");
    }
  }, [isOpen]);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <ul className={`${classes.menu} menu`}>
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
      )}
    </nav>
  );
};

export default Navbar;
