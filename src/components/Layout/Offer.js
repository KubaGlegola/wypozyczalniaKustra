import React, { useState } from "react";
import classes from "./Offer.module.css";
import Card from "../UI/Card";
import dom from "../../assets/dom.jpg";
import ogrod from "../../assets/ogrod.jpg";
import budowa from "../../assets/budowa.jpeg";
import Button from "../UI/Button";

const Offer = (props) => {
  const [itemsShown, setItemsShown] = useState(false);
  return (
    <Card className={classes.offer}>
      <h1 className={classes.title}>Oferta: </h1>
      {!itemsShown && (
        <div className={classes.cardsContainer}>
          <Card className={classes.card}>
            <p className={classes.title}>Dom</p>
            <img className={classes.img} src={dom} alt="dom" />
            <Button className={classes.buttonn}>Pokaż</Button>
          </Card>
          <Card className={classes.card}>
            <p className={classes.title}>Ogród</p>
            <img className={classes.img} src={ogrod} alt="ogrod" />
            <Button className={classes.buttonn}>Pokaż</Button>
          </Card>
          <Card className={classes.card}>
            <p className={classes.title}>Budowa</p>
            <img className={classes.img} src={budowa} alt="budowa" />
            <Button className={classes.buttonn}>Pokaż</Button>
          </Card>
        </div>
      )}
      {itemsShown &&
        props.products.map((product) => {
          return (
            <Card className={classes.productCard} key={props.id}>
              <img className={classes.productImg} src={product.img} />
              <span className={classes.productTitle}>{product.title}</span>
              <span className={classes.productCategory}>
                {product.category}
              </span>
            </Card>
          );
        })}
    </Card>
  );
};

export default Offer;
