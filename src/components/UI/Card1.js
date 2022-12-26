import React from "react";
import classes from "./Card1.module.css";
import { IoIosClose } from "react-icons/io";

const Card = (props) => {
  const showDetails = () => {
    const detailsCard = document.querySelector(`#${props.id}`);
    detailsCard.classList.remove("hidden");
  };

  const closeDetails = () => {
    const detailsCard = document.querySelector(`#${props.id}`);
    detailsCard.classList.add("hidden");
  };

  return (
    <div className={classes.card}>
      <div id={props.id} className={`${classes.details} hidden`}>
        <IoIosClose onClick={closeDetails} className={classes.closeButton} />
        <p>Cena za godzinę: {props.priceForHour}</p>
        <p>Cena za dzień: {props.priceForDay}</p>
      </div>
      <h1>{props.title}</h1>
      <img src={props.img} alt="kosiarka" />
      <button className={classes.button} onClick={showDetails}>
        Pokaż szczegóły
      </button>
    </div>
  );
};

export default Card;
