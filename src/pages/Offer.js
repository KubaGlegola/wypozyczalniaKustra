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
  "master cut",
  "mtd",
  "trotec",
  "weibang",
  "mar-pol",
];

const Offer = (props) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const [producer, setProducer] = useState("");
  const [isBarShown, setIsBarShown] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (!props.isMobile) {
      setIsBarShown(true);
    }
  }, [props.isMobile]);

  const getInputValue = () => {
    setInputValue(inputRef.current.value);
  };

  const changeCategoryHandler = (selectedCategory) => {
    setCategory(selectedCategory);
    if (producer !== "") {
      setProducer("");
      producer.checked = false;
    }
  };

  const changeProducerHandler = (selectedProducer) => {
    setProducer(selectedProducer);
    if (category !== "") {
      setCategory("");
      category.checked = false;
    }
  };

  const toggleFilterBar = () => {
    setIsBarShown((prev) => !prev);
  };

  useEffect(() => {
    if (category !== "") {
      setFilteredItems(
        items.filter((item) => item.category.includes(category.value))
      );
    } else {
      setFilteredItems(items);
    }
  }, [category]);

  useEffect(() => {
    console.log(producer);
    if (producer !== "") {
      setFilteredItems(
        items.filter(
          (item) =>
            "".concat(item.producer).toLowerCase() ===
            producer.value.toLowerCase()
        )
      );
    } else {
      setFilteredItems(items);
    }
  }, [producer]);

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
        <CSSTransition
          in={isBarShown}
          timeout={500}
          classNames="filter"
          unmountOnExit={true}
        >
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
            <FilterGroup
              changeValue={changeCategoryHandler}
              items={categories}
              name="kategorie"
              state={category}
            />
            <FilterGroup
              items={producers}
              name="Producenci"
              changeValue={changeProducerHandler}
              state={producer}
            />
          </Card>
        </CSSTransition>
      </Card>

      <FiFilter className={classes.icon} onClick={toggleFilterBar} />
    </div>
  );
};

export default Offer;
