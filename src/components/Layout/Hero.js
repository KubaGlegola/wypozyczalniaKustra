import React from "react";
import classes from "./Hero.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Card>
        <h1 className={classes.title}>
          wypożyczalnia sprzętu budowlanego łukasz kustra
        </h1>
        <p className={classes.description}>
          W naszej ofercie znajdą Państwo maszyny i elektronarzędzia najelpszych
          firm na rynku.
        </p>
        <Button>Oferta</Button>
        <Button>Kontakt</Button>
      </Card>
    </div>
  );
};

export default Hero;
