import React from "react";
import "./CarrosselImagens.css";

export default function BtnSlider({ direction, moveSlide }) {
  //console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "nextImg" ? "btn-slide-img nextImg" : "btn-slide-img prevImg"}
    >
      {direction === "nextImg" ? <i class="fa-solid fa-circle-chevron-right"></i> : <i class="fa-solid fa-circle-chevron-left"></i>}
    </button>
  );
}