import React, { useState } from 'react'
import BtnSlider from '../CarrosselImagens/BtnSlider';
import './CarrosselImagens.css'
import styles from '../Produtos/produtos.module.css'

function CarrosselImagens({props}) {

    const [slideIndex, setSlideIndex] = useState(1);


    const nextSlide = () => {
        if (slideIndex === 1) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex === 1) {
            setSlideIndex(2)
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

  return (
    <div className='slider'>
        <>
          {slideIndex === 1 ? <img src={props.image} alt={props.title} className={styles.img_box} /> : <img src={props.image2} alt={props.title} className={styles.img_box} />}
          
          <div className={styles.info_box}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </>
        <BtnSlider moveSlide={nextSlide} direction={"nextImg"} />
        <BtnSlider moveSlide={prevSlide} direction={"prevImg"} />
    </div>
  )
}

export default CarrosselImagens