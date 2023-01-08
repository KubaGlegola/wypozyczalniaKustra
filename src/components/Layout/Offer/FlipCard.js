import React from "react";
import Card from "../../UI/Card";
import classes from "./FlipCard.module.css";

const FlipCard = (props) => {
  return (
    <Card className={classes.flipCard}>
      <div className={classes["flipCard-inner"]}>
        <div className={classes["flipCard-front"]}>
          <p className={classes.name}>
            {props.product.producer
              ? props.product.name + " " + props.product.producer
              : props.product.name}
          </p>
          <div className={classes.imageContainer}>
            <img src={props.product.img} alt="kosiarka" />
          </div>
        </div>
        <div className={classes["flipCard-back"]}>
          <p className={classes.name}>
            {props.product.producer
              ? props.product.name + " " + props.product.producer
              : props.product.name}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula, diam eget blandit ornare, erat nisi porttitor nibh, et
            euismod libero dolor eu massa.
          </p>
          <div className={classes.prices}>
            {props.product.priceForSixHour && (
              <p>Cena za 6h: {props.product.priceForSixHour}zł</p>
            )}
            <p>Cena za 24h: {props.product.priceForDay}zł</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FlipCard;
