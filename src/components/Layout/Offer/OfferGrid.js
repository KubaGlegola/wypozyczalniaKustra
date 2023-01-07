import React, { Fragment } from "react";
import Card from "../../UI/Card";
import classes from "./OfferGrid.module.css";
import { FiFilter } from "react-icons/fi";
import FlipCard from "./FlipCard";

const OfferGrid = (props) => {
  return (
    <Fragment>
      <Card className={classes.container}>
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </Card>
      <FiFilter className={classes.filterIcon} />
    </Fragment>
  );
};

export default OfferGrid;
