import "./CarousalImage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { carousalDataImage } from "./carousalImageData";

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
        <img src='./arrowicon.png' alt="arrowIcon" style={{
          transform:"rotate(180deg)"
        }}/>
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
         <img src='./arrowicon.png' alt="arrowIcon" />
        </button>
      </div>
    );
}

export default CarousalImage;