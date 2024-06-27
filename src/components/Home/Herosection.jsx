// HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css'; // For custom styling

const images = [
  { id: 1, src: './bgImage1.png', alt: 'Image 1', text: 'Welcome to Little Mankind' },
  { id: 2, src: './bgImage2.png', alt: 'Image 2', text: 'Supporting Women, Strengthening Society' },
  { id: 3, src: './bgImage3.png', alt: 'Image 3', text: 'Nurturing the Future, One Child at a Time' },
  { id: 3, src: './bgImage4.png', alt: 'Image 3', text: 'Growing a Greener Tomorrow Together' },
  // Add more images as needed
];

const HeroSection = ({heroSection}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
