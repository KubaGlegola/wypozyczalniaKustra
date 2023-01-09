import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={`${classes.inputContainer}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input className={classes.input} {...props} ref={ref} />
    </div>
  );
});

export default Input;
