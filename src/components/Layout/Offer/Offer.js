import React, { useContext } from "react";
import Card from "../../UI/Card";
import classes from "./Offer.module.css";
import dom from "../../../assets/dom.jpg";
import budowa from "../../../assets/budowa.jpeg";
import elektronarzedzia from "../../../assets/elektronarzedzia.jpg";
import ogrod from "../../../assets/ogrod.jpg";
import Button from "../../UI/Button";
import OfferContext from "../../store/offer-context";

const Offer = (props) => {
  const offerCtx = useContext(OfferContext);
  return (
    <Card className={classes.offer}>
      <h1 className={classes.title}>
        W naszej ofercie znajdziesz wszystko czego potrzebujesz!
      </h1>
      <div className={classes.imagesContainer}>
        <div className={classes.imageContainer}>
          <img src={dom} alt="dom" />
          <div className={classes.imageButtonContainer}>
            <Button
              className={classes.imageButton}
              onClick={() => offerCtx.filterOffer("dom")}
            >
              Dom
            </Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={budowa} alt="budowa" />
          <div className={classes.imageButtonContainer}>
            <Button
              className={classes.imageButton}
              onClick={() => offerCtx.filterOffer("budowa")}
            >
              Budowa
            </Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={ogrod} alt="ogrod" />
          <div className={classes.imageButtonContainer}>
            <Button
              className={classes.imageButton}
              onClick={() => offerCtx.filterOffer("ogrod")}
            >
              Ogrod
            </Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={elektronarzedzia} alt="elektronarzedzia" />
          <div className={classes.imageButtonContainer}>
            <Button
              className={classes.imageButton}
              onClick={() => offerCtx.filterOffer("elektronarzedzia")}
            >
              Elektronarzędzia
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Offer;
