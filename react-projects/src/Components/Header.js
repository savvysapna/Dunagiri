import React from "react";
import "./Header.css";

const Header = ({ heading, animation }) => {
  return (
    <>
      <h1 className="header">{heading}</h1>
    </>
  );
};

export default Header;
