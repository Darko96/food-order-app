import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartComponent.css";

const HeaderCartButton = (props) => {
  return (
    <button>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
