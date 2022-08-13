import React from "react";
import "./CarroselVideos.css";
import leftArrow from "../../images/arrow-left.svg";
import rightArrow from "../../images/arrow-right.svg";

export default function BtnSlider({ direction, moveSlide }) {
  //console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <i className="fa-solid fa-angle-right carousel-btn"></i> : <i className="fa-solid fa-angle-left carousel-btn"></i>}
    </button>
  );
}