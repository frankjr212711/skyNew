import { useState } from "react";
import Styles from "./Styles.css";
import Video from "../../videos/video-4.mp4";

export const Hero = () => {
  return (

    <div className="heroContainer">
      <div className="heroBg">
        <video autoPlay loop muted src={Video} type="video/mp4" />
      </div>

      <div className="heroContent">
        <div className="heroContentWrap">
          <div className="heroText">
            <h1>Your one-stop place</h1>
            <p>
              Book a Design visit today & lets work towards your modern style
              home
            </p>
            <button className="heroBtn">
              <a href="/gjr">LEARN MORE</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
