import React, {useEffect} from 'react'
import "./Slider.css"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import meteorn_banner from "../../assets/meteorn-banner-wide.png"

function Slider() {

  useEffect(() => {
    const radios = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;

    const interval = setInterval(function() {
      radios[currentIndex].checked = false;  // Uncheck the current radio button
      currentIndex = (currentIndex + 1) % radios.length;  // Move to the next radio button
      radios[currentIndex].checked = true;  // Check the next radio button
    }, 5000);  // 5000ms = 5 seconds

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, []);

  return (
    <div id="slider">
        <input type="radio" name="slider" id="slide1" defaultChecked/>
        <input type="radio" name="slider" id="slide2"/>
        <input type="radio" name="slider" id="slide3"/>
        <input type="radio" name="slider" id="slide4"/>
        <div id="slides">
          <div id="overflow">
            <div className="inner">
              <div className="slide slide_1">
                <div className="slide-content">
                    <img className="game-slider-banner" src={meteorn_banner}></img>
                </div>
              </div>
              <div className="slide slide_2">
                <div className="slide-content">
                  <h2>Coming Soon</h2>
                </div>
              </div>
              <div className="slide slide_3">
                <div className="slide-content">
                  <h2>Coming Soon</h2>
                </div>
              </div>
              <div className="slide slide_4">
                <div className="slide-content">
                  <h2>Coming Soon</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bullets">
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
        </div>
      </div>
  )
}

export default Slider