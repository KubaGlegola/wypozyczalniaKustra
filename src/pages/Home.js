import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Producers from "../components/Layout/Producers";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import WhyUs from "../components/WhyUs";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.hero}>
        <Card className={classes.container}>
          <h1 className={classes.title}>
            wypożyczalnia sprzętu budowlanego łukasz kustra
          </h1>
          <div className={classes.description}>
            <p>
              W naszym asortymencie znajdą Państwo maszyny i elektronarzędzia
              najlepszych firm na rynku. Oferujemy sprzęt potrzebny przy
              budowie, remoncie, pielęgnacji ogrodu i codziennych czynościach
              domowych.
            </p>
            <div className={classes.buttonsContainer}>
              <Link to="/oferta">
                <Button>Oferta</Button>
              </Link>
              <Link to="/kontakt">
                <Button>Kontakt</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <Producers />
      <WhyUs />
    </Fragment>
  );
};

export default Home;
