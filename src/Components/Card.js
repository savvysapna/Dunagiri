import React from "react";
import "./Card.css";

const Card = ({ heading, cardImage, cardPara, children }) => {
  return (
    <>
      <div className="cardContainer">
        <img className="cardImage" src={cardImage} alt="" srcset="" />
        <h3 className="heading">{heading}</h3>
        <p className="cardPara">{cardPara}</p>
      </div>
    </>
  );
};

export default Card;
