import React, { useRef, useState } from "react";
import Hero from "../components/Layout/Hero";
import heroBcg from "../assets/hammer.jpg";
import Card from "../components/UI/Card";
import classes from "./Offer.module.css";
import { CSSTransition } from "react-transition-group";
import "../animations.css";
import items from "../assets/data/maszyny";
import FlipCard from "../components/Layout/Offer/FlipCard";

const Offer = () => {
  const [isRender, setIsRender] = useState(false);
  return (
    <div>
      <Hero imgSrc={heroBcg}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="example"
        >
          <Card className={classes.container}>
            <h1 className={classes.title}>oferta</h1>
          </Card>
        </CSSTransition>
      </Hero>
      <Card className={classes.itemsContainer}>
        {items.map((item) => (
          <FlipCard key={item.id} product={item} />
        ))}
      </Card>
    </div>
  );
};

export default Offer;
