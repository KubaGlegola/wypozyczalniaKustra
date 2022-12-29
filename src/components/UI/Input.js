import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.inputContainer}>
      <label htmlFor={props.id}>{props.label}</label>
      <input className={`${classes.input} ${props.className}`} {...props} />
    </div>
  );
};

export default Input;
