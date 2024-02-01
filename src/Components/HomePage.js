import React from "react";
import Header from "./Header";
import Button from "./Button";

import Paragraph from "./Paragraph";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="homePage">
        <div className="video">
          <video src={"./images/Video.mp4"} autoPlay loop muted />
        </div>
        <div className="homePageMainSection">
          <div className="subSection">
            <Header heading="Dunagiri Retreat" />
            <p className="homeCaption">
              Experience serenity and divinity steps away from <br />
              Mahavatar Babaji's Cave in the Himalayas.
            </p>
            <Button btnHeader="Inquire Now" />
          </div>
        </div>
        <div className="homePage_Featured">
          <Header heading="A Retreat For Your Soul" />
          <div className="retreatBox">
            <div className="reatreatImgbox">
              <img src="./images/reatreat02.webp" alt="" srcset="" />
              <img src="./images/reatreat01.webp" alt="" srcset="" />
              <img src="./images/reatreat03.webp" alt="" srcset="" />
              <img src="./images/reatreat04.webp" alt="" srcset="" />
            </div>
            <div className="paraBox">
              <Paragraph
                para="Nestled amidst the Dunagiri Mountains in the serene beauty of Uttarakhand, Dunagiri Retreat stands as a beacon for spiritual seekers. Founded in 2005,
            this eco-spiritual sanctuary is not just a yoga retreatbut a profound journey into self-discovery. Revered for its proximity to the legendary Mahavatar Babaji's
            Cave and the sacred site of Dunagiri Temple, our retreat is a gateway to the transformative teachings of Kriya Yoga as expounded by Mahavatar Babaji and elucidated
            in Paramahansa Yogananda's 'Autobiography of a Yogi'."
              />
              <Paragraph
                para="
            At Dunagiri, spirituality and sustainability merge seamlessly. Our eco-friendly accommodations and organic 
            gardens are set against a backdrop of the Himalayan splendor, offering a tranquil space for meditation retreats and a deep connection with nature. Immerse yourself 
            in the spiritual essence of the holy river and the divine energy of Devi temples nearby."
              />
              <Paragraph
                para="Discover the message of Kriya Yoga, walk the sacred steps to Babaji's Cave, 
            and explore the rich heritage of Lahiri Mahasaya and Neem Karoli Baba. Dunagiri Retreat, situated close to Dwarahat town and the charming Kukuchina village, 
            attracts a large number of spiritual seekers annually, all drawn to the promise of peace and self-realization. Join us at Dunagiri Retreat, where every step is a 
            step towards inner peace and spiritual awakening."
              />
            </div>
          </div>
          {/* <Button btnHeader="About Us" /> */}
          <p className="featureBoxHeading">As Featured In</p>
          <div className="featureBox">
            <div className="featureBox1">
              <img src="./images/feature01.webp" alt="" srcset="" />
            </div>
            <div className="featureBox2">
              {" "}
              <img src="./images/feature02.webp" alt="" srcset="" />
            </div>
            <div className="featureBox3">
              {" "}
              <img src="./images/feature03.webp" alt="" srcset="" />
            </div>
          </div>

          {/* <Button btnHeader="About Us" /> */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
