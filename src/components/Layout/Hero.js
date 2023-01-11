import React from "react";
import classes from "./Hero.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Hero = (props) => {
  return (
    <div
      className={classes.hero}
      style={{ background: `url(${props.imgSrc})`, backgroundSize: "cover" }}
    >
      {props.children}
    </div>
  );
};

export default Hero;
