import React, { useState, useEffect, useRef, Fragment } from "react";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { Spin as Hamburger } from "hamburger-react";
import classes from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  let menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      menuRef.current.classList.add(classes.showMenu);
    } else {
      menuRef.current.classList.remove(classes.showMenu);
    }
  }, [isOpen]);
  return (
    <Fragment>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />

      {/* <Menu ref={menuRef} className={`${classes.menu}`} /> */}
      <ul ref={menuRef} className={`${classes.menu}`}>
        <li>
          <Link
            to="/"
            className={classes.menuItem}
            onClick={() => setIsOpen(false)}
          >
            <AiFillHome className={classes.icon} />
            Strona główna
          </Link>
        </li>
        <li>
          <Link
            to="/oferta"
            className={classes.menuItem}
            onClick={() => setIsOpen(false)}
          >
            <MdLocalOffer className={classes.icon} />
            Oferta
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            className={classes.menuItem}
            onClick={() => setIsOpen(false)}
          >
            <AiFillMail className={classes.icon} />
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            to="/regulamin"
            className={classes.menuItem}
            onClick={() => setIsOpen(false)}
          >
            <GoAlert className={classes.icon} />
            Regulamin
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Menu;
