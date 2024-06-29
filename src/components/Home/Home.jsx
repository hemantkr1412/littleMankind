import HeroSection from "./Herosection";
import WhatweDo from "./WhatweDo";
import CurrentProject from "./CurrentProject";
import OurEfforts from "./OurEfforts";
import Impact from "./Impact";
import Team from "./Team";
import Partners from "./Partners";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";
import { useEffect, useState } from "react";

const Home = ({heroSection,handleScroll,projects,about,joinus,contact}) =>{
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

    return(
        <div >
        <HeroSection heroSection={heroSection} 
        images={images}
        />
        <WhatweDo />
        <CurrentProject 
        projects={projects}
        />
        <OurEfforts />
        <Impact />
        <Team 
        about={about}
        />
        <Partners />
        <JoinUs 
        handleScroll={handleScroll}
        joinus={joinus}
        contact={contact}
        />
        <ContactUs 
        contact={contact}
        />

        </div>
    )
}

export default Home;