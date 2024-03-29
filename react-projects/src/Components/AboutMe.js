import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./AboutMe.css";
import Header from "./Header";

const AboutMe = () => {
  return (
    <>
      <section className="aboutMeMainBody">
        <div className="aboutMeHeaderText">
          <Header heading="About Me" />
          <p className="aboutMeText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dicta, eos quia eligendi, sed et aperiam minus commodi sint fuga
            quam enim sequi ea, reprehenderit suscipit eaque nesciunt quidem
            dolorem! Sit est officia deleniti dolorum dolore doloremque, quaerat
            adipisci id esse? Doloremque esse dolore quis consequatur recusandae
            saepe quidem, dolor sit quibusdam fugit, repellendus iusto
            voluptates alias, nemo eligendi eius corrupti explicabo voluptate
            quas non id delectus. Impedit dolorum eaque fugiat, nobis magni,
            modi iure commodi voluptate harum aliquam nihil.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
