import React from "react";
import Card from "./UI/Card";
import classes from "./WhyUs.module.css";
import { GiLaurelCrown } from "react-icons/gi";

const WhyUs = () => {
  return (
    <Card className={classes.whyUs}>
      <h1 className={classes.title}>Dlaczego my?</h1>
      <div className={classes.item}>
        <GiLaurelCrown className={classes.badge} />
        <h2>Transport</h2>
        <p></p>
      </div>
      <div className={classes.item}>
        <GiLaurelCrown className={classes.badge} />
        <h2>Konkurencyjne ceny</h2>
        <p></p>
      </div>
      <div className={classes.item}>
        <GiLaurelCrown className={classes.badge} />
        <h2>najlepsi producenci</h2>
        <p></p>
      </div>
    </Card>
  );
};

export default WhyUs;
