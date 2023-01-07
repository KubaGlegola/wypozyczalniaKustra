import React from "react";
import Card from "../../UI/Card";
import classes from "./FlipCard.module.css";
import kosiarka from "../../../assets/kosiarka.png";

const FlipCard = () => {
  return (
    <Card className={classes.flipCard}>
      <div className={classes["flipCard-inner"]}>
        <div className={classes["flipCard-front"]}>
          <p>Nazwa maszyny</p>
          <div className={classes.imageContainer}>
            <img src={kosiarka} alt="kosiarka" />
          </div>
        </div>
        <div className={classes["flipCard-back"]}>
          <p className={classes.name}>Nazwa maszyny</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula, diam eget blandit ornare, erat nisi porttitor nibh, et
            euismod libero dolor eu massa.
          </p>
          <p>Cena za 6h: 200zł</p>
          <p>Cena za 24h: 500zł</p>
        </div>
      </div>
    </Card>
  );
};

export default FlipCard;
