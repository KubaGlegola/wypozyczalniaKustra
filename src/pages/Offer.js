import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Layout/Hero";
import heroBcg from "../assets/hammer.jpg";
import Card from "../components/UI/Card";
import classes from "./Offer.module.css";
import { CSSTransition } from "react-transition-group";
import "../animations.css";
import items from "../assets/data/maszyny";
import FlipCard from "../components/Layout/Offer/FlipCard";
import Input from "../components/UI/Input";
import { FiFilter } from "react-icons/fi";

const Offer = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");

  const getInputValue = () => {
    setInputValue(inputRef.current.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim().length > 0) {
        setFilteredItems(
          items.filter((item) =>
            ""
              .concat(item.name, " ", item.producer)
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          )
        );
      } else {
        setFilteredItems(items);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

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
        <Card className={classes.actionBar}>
          <Input
            ref={inputRef}
            onChange={getInputValue}
            id="search"
            name="search"
            type="text"
          />
          <FiFilter className={classes.icon} />
        </Card>
        <div className={classes.itemsGrid}>
          {filteredItems.map((item) => (
            <FlipCard key={item.id} product={item} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Offer;
