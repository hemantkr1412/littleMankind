import "./CarousalBox.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { carousalData } from "./carousalDataBox";

const Carousal = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1220) {
        setSlidesToShow(3);
        setAutoplay(false);
      } else if (screenWidth >= 820) {
        setSlidesToShow(2);
        setAutoplay(false);
      } else if (screenWidth >= 770) {
        setSlidesToShow(1);
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
    <div className="slider-container">
      <button className="prev" onClick={handlePrev}>
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
      <div className="slider-box">
        <Slider ref={sliderRef} {...settings} className="slider">
          {carousalData.map((box, index) => (
            <div className="box">
              <div key={index} className="box-item">
                <img src={box.img}  />
                <div className="box-text">
                  <h4>{box.header}</h4>
                  <p>{box.description}</p>
                </div>
                <div className="boxLine" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="next" onClick={handleNext}>
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
};

export default Carousal;