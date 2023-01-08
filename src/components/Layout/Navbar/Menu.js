import React from "react";
import classes from "./Menu.module.css";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <ul className={`${classes.menu} ${props.className}`} {...props}>
      <li>
        <NavLink
          to="/"
          className={classes.menuItem}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "black" : "",
            color: isActive ? "white" : "",
          })}
        >
          <AiFillHome className={classes.icon} />
          Strona główna
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/oferta"
          className={classes.menuItem}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "black" : "",
            color: isActive ? "white" : "",
          })}
        >
          <MdLocalOffer className={classes.icon} />
          Oferta
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/kontakt"
          className={classes.menuItem}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "black" : "",
            color: isActive ? "white" : "",
          })}
        >
          <AiFillMail className={classes.icon} />
          Kontakt
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/regulamin"
          className={classes.menuItem}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "black" : "",
            color: isActive ? "white" : "",
          })}
        >
          <GoAlert className={classes.icon} />
          Regulamin
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
