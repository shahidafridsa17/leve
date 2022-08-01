import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
// import ImageSlider from "./ImageSlider";
import Dots from "./Dots";
import "./Slider.css";


function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ImageSlider, setImageSlider] = useState([])
  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("https://levefragrance.com/api/v1/web/banner-images/", options)
      .then((response) => response.json())
      .then((json) => {
        setImageSlider(json)
      })
      .catch((error) => alert("Connection Problem"));
    const len = ImageSlider.length - 1;
    let interval;
    console.log(len, "dcd");
    if (len != 0) {
      interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);
    } else {
      setActiveIndex(0)
    }
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider} />
      <Dots
        activeIndex={activeIndex}
        ImageSlider={ImageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
