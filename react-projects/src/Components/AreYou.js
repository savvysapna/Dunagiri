import React from "react";
import "./AreYou.css";
import Header from "./Header";
import Card from "./Card";

const AreYou = () => {
  return (
    <>
      <section className="AreYou">
        <div className="areYouMain">
          <div className="rightContainer">
            <div className="rightContainerHeader">
              <Header heading="No matter what your motivation is, We can Help!" />
              <p className="subHeader">So are You</p>
            </div>
            <div className="rightContainerGrid">
              <Card
                cardImage="./images/01.jpg"
                cardPara="Immerse yourself in a period of reflection and self-discovery to uncover your desires and purpose."
                heading="Searching for something greater in life?"
              />
              <Card
                cardImage="./images/02.jpg"
                cardPara="Discover an approach to wellness tailored to your unique constitution that gives your mind and body what it needs to thrive."
                heading="In need of a mind-body reset?"
              />
              <Card
                cardImage="./images/03.jpg"
                cardPara="Gain tools to move through periods of unease with purpose and clarity."
                heading="Experiencing a life transition?"
              />
              <Card
                cardImage="./images/04.jpg"
                cardPara="Experience profound shifts as you reconnect to the divine through daily meditation and yoga practices."
                heading="Looking for a spiritual awakening?"
              />
              <Card
                cardImage="./images/05.jpg"
                cardPara="Step away from that to-do list to nourish and replenish yourself in a lasting way."
                heading="Ready to refill your cup?"
              />
              <Card
                cardImage="./images/06.jpg"
                cardPara="Uncover Kriya Yoga's secrets to thriving wellbeing and awaken the eternal source of joy within."
                heading="Wanting to live a healthier, happier life?"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AreYou;
