import React, {useEffect, useState} from 'react'
import './CarrosselVideos.css'
import BtnSlider from './BtnSlider'
import dataSlider from '../../data/CarrosselData.js'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = () => {
            const videosInst = document.querySelectorAll("[data-carousel-video]");
            setVideos(videosInst);
            videosInst[1].pause();
            videosInst[2].pause();
        }
        getVideos();
    }, []);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1);
            videos[slideIndex-1].pause();
            videos[slideIndex].load();
            videos[slideIndex].play();
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1);
            videos[dataSlider.length-1].pause();
            videos[0].load();
            videos[0].play();
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
            videos[slideIndex-1].pause();
            videos[slideIndex-2].load();
            videos[slideIndex-2].play();
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length);
            videos[0].pause();
            videos[2].load();
            videos[2].play();
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
        videos[index-1].load();
        videos[index-1].play();
        videos[index].pause();
        videos[index+1].pause();
    }

    const video = () => {
        videos.forEach(video => {
            video.addEventListener('ended', () => {
                nextSlide();
            })
        })
    }
    video();

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide hide"}
                    >
                        <video 
                        data-carousel-video
                        src={`${obj.video}`}
                        alt="video institucional"
                        autoPlay
                        controls
                        muted
                        />
                    </div>
                )
            })}
            
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}