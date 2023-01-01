import React from "react";
import Card from "../UI/Card";
import classes from "./Offer.module.css";

const Offer = (props) => {
  return (
    <Card className={classes.offer}>
      <h1 className={classes.title}>Wyróżnione oferty</h1>
    </Card>
  );
};

export default Offer;
