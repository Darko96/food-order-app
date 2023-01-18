import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Ovo ce obezbediti da sva svojstva koja se nalaze unutar 
      props.input budu dodata input polju */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
