import { ImageCard } from "./AnimalWelfareProject";

import "./project.css"
const Forest = ()=>{
    return(
        <>
        <div 

        className="donateMainContainer"
        style={{
            // position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: "url(./treeImageBg.png)",
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
              PLANTING TREES,
              <br />
              CULTIVATING A GREENER FUTURE
            </h1>
        </div>
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
                OUR TREE PLANTATION PROJECTS
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

export default Forest;