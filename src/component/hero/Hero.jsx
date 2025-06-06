import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>

        <div className="left-text">
          <div className="late-carosuel">
            <p>Let's give you that fit</p>
            <p>checkout the new release</p>
          </div>

          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-lastest-btn">
               <p>Lastest Collection</p>
                <FaArrowRight  className="arrow-icon"/>
        
        </div>
      </div>

      <div className="hero-right">
       <img src="/image/hero-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
