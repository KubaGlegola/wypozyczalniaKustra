import React from "react";
import classes from "./Radio.module.css";

const Radio = (props) => {
  return (
    <div className={classes.container}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        className={classes.radio}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Radio;
