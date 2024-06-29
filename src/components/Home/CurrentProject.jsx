import '@fontsource/syne/700.css';
import "./CurrentProject.css"
import Carousal from './CarousalBox';


const CurrentProject = ({projects}) =>{
    return(
        <div
            ref={projects}
            style={{
                width:"100%",
                display:"flex",
                height:"auto",
                flexDirection:"column",
                alignItems:"center",
                backgroundColor:"white"
            }}
        >
            <div style={{
                width:"80%",
                 marginTop:"80px"
            }}>
                 <div style={{
                
                }}>
                    <p 
                    className='gradient-text'
                    
                    style={{
                      
                        fontFamily: 'Syne, sans-serif' ,
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28.8px",
                        letterSpacing: "0.06em",
                        textAlign:"center",

                    }}>
                        Support our
                    </p>
                    <p style={{
                    color:"black",
                    fontWeight:"700",
                    fontSize:"50px",
                    lineHeight:"75px",
                    textAlign:"center",
                    }}>
                    CURRENT PROJECTS
                    </p> 
                </div>
            </div>
            <Carousal />

        </div>
    )
}


export default CurrentProject;