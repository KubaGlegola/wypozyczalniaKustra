import React, { useState, useEffect, useRef } from "react";
import classes from "./Navbar.module.css";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  let menuHandler = document.querySelector("ul");
  let menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      menuRef.current.classList.add(classes.showMenu);
      console.log(classes.showMenu);
    } else {
      menuRef.current.classList.remove(classes.showMenu);
    }
  }, [isOpen]);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      <ul ref={menuRef} className={`${classes.menu}`}>
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
    </nav>
  );
};

export default Navbar;
