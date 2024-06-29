
import "./project.css";
import HeroSection from "../Home/Herosection";
import { useEffect, useState } from "react";
import BgCarausal from "../Home/BgCarausal";


const AnimalWelfare = ()=>{
    const imagesBG = [
        { id: 1, src: './11.jpg', alt: 'Image 1', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        { id: 2, src: './44.jpg', alt: 'Image 2', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        { id: 3, src: './55.jpg', alt: 'Image 3', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        { id: 3, src: './34.png', alt: 'Image 3', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        // Add more images as needed
      ];
    
      const [images,setImages] = useState(imagesBG);
    
    
      const imagesMobileBG = [
        { id: 1, src: './ron-hansen-MmfIwBHX1bY-unsplash1.png', alt: 'Image 1', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        { id: 2, src: './ron-hansen-MmfIwBHX1bY-unsplash2.png', alt: 'Image 2', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        { id: 3, src: './ron-hansen-MmfIwBHX1bY-unsplash2.png', alt: 'Image 3', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
        { id: 3, src: './ron-hansen-MmfIwBHX1bY-unsplash4.png', alt: 'Image 3', text: ' DEFENDING WILDLIFE, SECURING THEIR TOMORROW' },
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
            backgroundImage: "url(./animalBg.png)",
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
              DEFENDING WILDLIFE, SECURING THEIR TOMORROW
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
                OUR ANIMAL CONSERVATION PROJECTS
            </h3>
        </div>
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
        </>
    )
}

export default AnimalWelfare;




const ImageCard = ({url,text}) =>{
    return(
        <div
        style={{
            backgroundImage:`url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
         className="welfareImageBox">

            <div style={{
                width:"220px",
                height:"60px",
                background: "rgba(255, 255, 255, 0.7)",
                borderRadius:"10px"

            }}>
               <p style={{
                textAlign:"center",
                fontSize:"13px"
               }}>11 February 2023, TNPESU, Chennai.<br /> 2000 saplings. By : LTIMindtree</p>
            </div>

        </div>
    )
}

export {ImageCard};