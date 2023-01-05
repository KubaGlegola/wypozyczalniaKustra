import React from "react";
import Card from "../UI/Card";
import classes from "./Offer.module.css";
import dom from "../../assets/dom.jpg";
import budowa from "../../assets/budowa.jpeg";
import elektronarzedzia from "../../assets/elektronarzedzia.jpg";
import ogrod from "../../assets/ogrod.jpg";
import Button from "../UI/Button";

const Offer = (props) => {
  return (
    <Card className={classes.offer}>
      <h1 className={classes.title}>
        W naszej ofercie znajdziesz wszystko czego potrzebujesz!
      </h1>
      <div className={classes.imagesContainer}>
        <div className={classes.imageContainer}>
          <img src={dom} alt="dom" />
          <div className={classes.imageButtonContainer}>
            <Button className={classes.imageButton}>Dom</Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={budowa} alt="budowa" />
          <div className={classes.imageButtonContainer}>
            <Button className={classes.imageButton}>Budowa</Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={ogrod} alt="ogrod" />
          <div className={classes.imageButtonContainer}>
            <Button className={classes.imageButton}>Ogrod</Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={elektronarzedzia} alt="elektronarzedzia" />
          <div className={classes.imageButtonContainer}>
            <Button className={classes.imageButton}>Elektronarzędzia</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Offer;
