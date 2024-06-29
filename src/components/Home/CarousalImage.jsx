import "./CarousalImage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { carousalDataImage } from "./carousalImageData";

import styled from 'styled-components';

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;

  svg {
    width: 100%;
    height: 100%;
    transition: fill 0.3s, background 0.3s;
  }

  &:hover svg rect {
    fill: url(#hoverGradient);
  }

  &:hover svg path {
    fill: url(#hoverGradient);
  }
`;

const CarousalImage = () =>{
    const [slidesToShow, setSlidesToShow] = useState(2);
    const [slidesToScroll, setSlidesToScroll] = useState(1);
    const sliderRef = useRef(null);
    const [autoplay, setAutoplay] = useState(false);
  
    useEffect(() => {
      const updateSlidesToShow = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth >= 1220) {
          setSlidesToShow(5);
          setAutoplay(false);
        } else if (screenWidth >= 820) {
          setSlidesToShow(4);
          setAutoplay(false);
        } else if (screenWidth >= 770) {
          setSlidesToShow(3);
          setAutoplay(true);
        } else if (screenWidth >= 600) {
          setSlidesToShow(3);
          setAutoplay(true);
        } else if (screenWidth >= 400) {
          setSlidesToShow(2);
          setAutoplay(true);
        } else {
          setSlidesToShow(1);
          setSlidesToScroll(1);
          setAutoplay(true);
        }
      };
      updateSlidesToShow();
      window.addEventListener("resize", updateSlidesToShow);
  
      return () => {
        window.removeEventListener("resize", updateSlidesToShow);
      };
    }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      arrows: false,
      autoplay: autoplay,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
  
    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleNext = () => {
      sliderRef.current.slickNext();
    };
  
    return (
      <div className="slider-containerImage">
        <button className="prevImage" onClick={handlePrev}>
          <div className="arrowIconBox" style={{
            width:"50px",
            height:"50px",
            padding:"0.3rem",
            borderRadius:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img src='./arrow.svg' alt="arrowIcon" style={{
              transform:"rotate(180deg)"
            }}/>
        </div>
        </button>
        <div className="slider-boxImage">
          <Slider ref={sliderRef} {...settings} className="sliderImage">
            {carousalDataImage.map((box, index) => (
              <div className="boxImage">
                <div key={index} className="box-itemImage">
                  <img src={box.img}  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className="nextImage" onClick={handleNext}>
        <div className="arrowIconBox" style={{
            width:"50px",
            height:"50px",
            padding:"0.3rem",
            borderRadius:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <img src='./arrow.svg' alt="arrowIcon" />
        </div>
        </button>
      </div>
    );
}

export default CarousalImage;