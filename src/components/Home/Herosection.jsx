// HeroSection.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css'; // For custom styling






const HeroSection = ({heroSection,images}) => {

  




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin:"0px"}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'white',
        }}
      />
    )
  };

  return (
    <div ref={heroSection} className="hero-container">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id} className="hero-slide">
            <img src={image.src} alt={image.alt} />
            <div className="hero-text">
              <h1>{image.text}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
