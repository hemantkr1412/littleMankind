// HeroSection.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css'; // For custom styling






const HeroSection = ({heroSection}) => {

  


  const imagesBG = [
    { id: 1, src: './bgImage1.png', alt: 'Image 1', text: 'Welcome to Little Mankind' },
    { id: 2, src: './bgImage2.jpg', alt: 'Image 2', text: 'Supporting Women, Strengthening Society' },
    { id: 3, src: './bgImage3.jpg', alt: 'Image 3', text: 'Nurturing the Future, One Child at a Time' },
    { id: 3, src: './bgImage4.jpg', alt: 'Image 3', text: 'Growing a Greener Tomorrow Together' },
    // Add more images as needed
  ];

  const [images,setImages] = useState(imagesBG);


  const imagesMobileBG = [
    { id: 1, src: './bgImageMob1.png', alt: 'Image 1', text: 'Welcome to Little Mankind' },
    { id: 2, src: './bgImageMob2.png', alt: 'Image 2', text: 'Supporting Women, Strengthening Society' },
    { id: 3, src: './bgImageMob3.png', alt: 'Image 3', text: 'Nurturing the Future, One Child at a Time' },
    { id: 3, src: './bgImageMob4.png', alt: 'Image 3', text: 'Growing a Greener Tomorrow Together' },
    // Add more images as needed
  ];

  useEffect(()=>{
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;

      if(screenWidth <= 500){
        setImages(imagesMobileBG);
      }else{
        setImages(imagesBG);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  },[])

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
