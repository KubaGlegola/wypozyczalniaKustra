import React, { Fragment, useContext } from "react";
import Card from "../../UI/Card";
import classes from "./OfferGrid.module.css";
import { FiFilter } from "react-icons/fi";
import FlipCard from "./FlipCard";
import OfferContext from "../../store/offer-context";

const OfferGrid = (props) => {
  const offerCtx = useContext(OfferContext);
  return (
    <Fragment>
      <Card className={classes.container}>
        {offerCtx.items.map((item) => (
          <FlipCard key={item.id} product={item} />
        ))}
      </Card>
      {/* <FiFilter className={classes.filterIcon} /> */}
    </Fragment>
  );
};

export default OfferGrid;
