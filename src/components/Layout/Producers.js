import React from "react";
import Card from "../UI/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bosch from "../../assets/producers/bosch.png";
import cedrus from "../../assets/producers/cedrus.png";
import echo from "../../assets/producers/echo.png";
import karcher from "../../assets/producers/karcher.png";
import lumag from "../../assets/producers/lumag.png";
import makita from "../../assets/producers/makita.png";
import mastercut from "../../assets/producers/mastercut.png";
import mtd from "../../assets/producers/mtd.png";
import trotec from "../../assets/producers/trotec.png";
import weibang from "../../assets/producers/weibang.png";
import classes from "./Producers.module.css";

const Producers = () => {
  return (
    <Card className={classes.carouselContainer}>
      <h1 className={classes.title}>Producenci w naszej ofercie: </h1>
      <Carousel
        className={classes.carousel}
        axis="horizontal"
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        autoPlay="true"
        interval="2000"
        infiniteLoop="true"
        transitionTime="1000"
        centerMode="true"
        centerSlidePercentage="33"
      >
        <div className={classes.item}>
          <img src={bosch} alt="bosch" />
        </div>
        <div className={classes.item}>
          <img src={cedrus} alt="cedrus" />
        </div>
        <div className={classes.item}>
          <img src={echo} alt="echo" />
        </div>
        <div className={classes.item}>
          <img src={karcher} alt="karcher" />
        </div>
        <div className={classes.item}>
          <img src={makita} alt="makita" />
        </div>
        <div className={classes.item}>
          <img src={mastercut} alt="mastercut" />
        </div>
        <div className={classes.item}>
          <img src={lumag} alt="lumag" />
        </div>
        <div className={classes.item}>
          <img src={mtd} alt="mtd" />
        </div>
        <div className={classes.item}>
          <img src={trotec} alt="trotec" />
        </div>
        <div className={classes.item}>
          <img src={weibang} alt="weibang" />
        </div>
      </Carousel>
    </Card>
  );
};

export default Producers;
