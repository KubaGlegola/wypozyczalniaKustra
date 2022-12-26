import React from "react";
import classes from "./Hero.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Card className={classes.container}>
        <h1 className={classes.title}>
          wypożyczalnia sprzętu budowlanego łukasz kustra
        </h1>
        <div className={classes.description}>
          <p>
            W naszym asortymencie znajdą Państwo maszyny i elektronarzędzia
            najlepszych firm na rynku. Oferujemy sprzęt potrzebny przy budowie,
            remoncie, pielęgnacji ogrodu i codziennych czynościach domowych.
          </p>
          <div className={classes.buttonsContainer}>
            <Button>Oferta</Button>
            <Button>Kontakt</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
