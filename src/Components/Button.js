import React from "react";
import "./Button.css";

const Button = ({ btnHeader }) => {
  return (
    <>
      <button className="btn">{btnHeader}</button>
    </>
  );
};

export default Button;
