import React from "react";

const Paragraph = ({ para, fontFamily }) => {
  return (
    <>
      <p
        className="Paragraph"
        style={{
          fontSize: "1.3rem",
          fontFamily: "Lato",
          fontStyle: "none",
          marginBottom: "1.5rem",
          zIndex: "1",
        }}
      >
        {para}
      </p>
    </>
  );
};

export default Paragraph;
