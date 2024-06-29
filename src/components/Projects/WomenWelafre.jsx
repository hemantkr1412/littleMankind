import { useEffect, useState } from "react";
import { ImageCard } from "./AnimalWelfareProject";

import "./project.css"
import HeroSection from "../Home/Herosection";
import BgCarausal from "../Home/BgCarausal";
const WomenWelfare = ()=>{
    const imagesBG = [
        { id: 1, src: './w1.jpg', alt: 'Image 1', text: ' WOMEN FIRST,A BETTER TOMORROW' },
        { id: 2, src: './w2.jpg', alt: 'Image 2', text: ' WOMEN FIRST,A BETTER TOMORROW' },
        { id: 3, src: './w3.jpg', alt: 'Image 3', text: '  WOMEN FIRST,A BETTER TOMORROW' },
        // Add more images as needed
      ];
    
      const [images,setImages] = useState(imagesBG);
    
    
      const imagesMobileBG = [
        { id: 1, src: './ron-hansen-MmfIwBHX1bY-unsplash 1 (8).png', alt: 'Image 1', text: '  WOMEN FIRST,A BETTER TOMORROW' },
        { id: 2, src: './ron-hansen-MmfIwBHX1bY-unsplash 1 (9).png', alt: 'Image 2', text: '  WOMEN FIRST,A BETTER TOMORROW' },
        { id: 3, src: './ron-hansen-MmfIwBHX1bY-unsplash 1 (10).png', alt: 'Image 3', text: '  WOMEN FIRST,A BETTER TOMORROW' },
       
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
      },[]);


    return(
        <>
        <BgCarausal
        images={images}
        text={images[0].text}
        />
        {/* <div 

        className="donateMainContainer"
        style={{
            // position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: "url(./womenImageBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            justifyContent:"center",
            alignContent:"center"
          }}>
            <h1 style={{
            //   position: "absolute",
            //   bottom: "0",
            //   left: "50%",
            //   transform: "translateX(-50%)",
              fontSize: "3rem",
              fontWeight: "700",
              lineHeight: "96px",
              letterSpacing: "0.08em",
              color: "white",
              textAlign: "center",
            }}>
                WOMEN FIRST,
                <br />
                A BETTER TOMORROW
            </h1>
        </div> */}
        <div style={{
            width:"100%",
            height:"150px",
            backgroundColor:"rgba(249, 224, 255, 1)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>

            <h3 style={{
                fontSize: "25px",
                fontWeight: "600",
                lineHeight: "48px",
                letterSpacing: "0.28em",
                textAlign: "center",
                color:"black"
                
            }}>
                OUR WOMEN WELFARE PROJECTS
            </h3>
        </div>
        <div 
        // className="donateSubContainer"
        
        style={{
            background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
            height:"100vh",
            width:"100%",
            display:"flex",
            // alignItems:"center",
            // padding:"3rem",
            justifyContent:"space-between",
            gap:"3rem"
        }}>
             <div 
        
        style={{
            background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
            minHeight:"800px",
            width:"100%",
            display:"flex",
            alignItems:"center",
            // padding:"3rem",
            justifyContent:"center",
            // gap:"3rem"
        }}>
            <div style={{
                width:"90%"
            }}>
                <div className="welfareImageMainBox">
                    <ImageCard 
                    url={'./animalImage1.png'}
                    // text={"11 February 2023, TNPESU, Chennai. 2000 saplings. By : LTIMindtree"}
                    />
                    <ImageCard 
                    url={'./animalImage2.png'}

                    />
                    <ImageCard 
                    url={'./animalImage3.png'}
                    />
                    <ImageCard 
                    url={'./animalImage2.png'}
                    />
                    <ImageCard 
                    url={'./animalImage5.png'}
                    />
                    <ImageCard
                    url={'./animalImage6.png'}
                    />
                    

                </div>
            </div>

        </div>

        </div>
        </>
    )
}

export default WomenWelfare;