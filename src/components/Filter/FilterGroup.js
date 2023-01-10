import React, { useState } from "react";
import classes from "./FilterGroup.module.css";
import { RxCross2 } from "react-icons/rx";
import Radio from "../UI/Radio";

const FilterGroup = (props) => {
  const [checkedRadio, setCheckedRadio] = useState("");

  const clearChecked = () => {
    checkedRadio.checked = false;
    setCheckedRadio("");
  };

  const onChangeHandler = (e) => {
    setCheckedRadio(e.target);
  };

  return (
    <div>
      <p className={classes.header}>
        <strong>{props.name}</strong>
        <RxCross2 onClick={clearChecked} />
      </p>
      <form className={classes.form} onChange={onChangeHandler}>
        {props.items.map((item) => {
          return (
            <Radio
              key={item}
              name={props.name}
              value={item}
              id={item}
              label={item}
            />
          );
        })}
      </form>
    </div>
  );
};

export default FilterGroup;
