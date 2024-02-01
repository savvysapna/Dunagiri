import React from "react";
import AboutMe from "./Components/AboutMe";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import AreYou from "./Components/AreYou";
import "./App.css";
const App = () => {
  return (
    <section className="dunaGiri_Main">
      <Navbar />
      <div className="dunaGiriPages">
        <HomePage />
        <AreYou />
        <Banner />
      </div>
    </section>
  );
};

export default App;
