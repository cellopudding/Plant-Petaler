import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://perenual.com/storage/species_image/1199_begonia_casper/og/52423452233_02b4dc198b_b.jpg",
    "https://perenual.com/storage/species_image/540_adenium_obesum/og/9244335137_6d662ed77c_b.jpg",
    "https://perenual.com/storage/species_image/2272_cycas_revoluta/og/26712271676_6dc6c5fabc_b.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider my-2">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 50}vw)` }}
      >
        <img src={data[0]} alt="" className="slider-image" />
        <img src={data[1]} alt="" className="slider-image" />
        <img src={data[2]} alt="" className="slider-image" />

        <div className="slider-icons">
          <div className="arrow-icon" onClick={prevSlide}>
            <WestOutlinedIcon />
          </div>
          <div className="arrow-icon" onClick={nextSlide}>
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
