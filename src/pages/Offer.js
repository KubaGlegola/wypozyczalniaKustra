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
import Radio from "../components/UI/Radio";
import FilterGroup from "../components/Filter/FilterGroup";

const categories = ["dom", "ogrod", "budowa", "elektronarzedzia"];
const producers = [
  "bosch",
  "cedrus",
  "echo",
  "karcher",
  "lumag",
  "makita",
  "master-cut",
  "mtd",
  "trotec",
  "weibang",
];

const Offer = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const inputRef = useRef("");

  const getInputValue = () => {
    setInputValue(inputRef.current.value);
  };

  const getCategoryValue = () => {};

  // useEffect(() => {
  //   if (checkedCategory !== "") {
  //     setFilteredItems(
  //       items.filter((item) => item.category.includes(checkedCategory.value))
  //     );
  //   } else {
  //     setFilteredItems(items);
  //   }
  // }, [checkedCategory]);

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
        <div className={classes.itemsGrid}>
          {filteredItems.map((item) => (
            <FlipCard key={item.id} product={item} />
          ))}
        </div>
        <Card className={classes.actionBar}>
          <p>
            <strong>Filtruj</strong>
          </p>
          <Input
            ref={inputRef}
            onChange={getInputValue}
            id="search"
            name="search"
            type="text"
          />
          <FilterGroup items={categories} name="kategorie" />
          <FilterGroup items={producers} name="Producenci" />

          {/* <FiFilter className={classes.icon} /> */}
        </Card>
      </Card>
    </div>
  );
};

export default Offer;
