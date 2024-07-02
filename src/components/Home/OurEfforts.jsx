import CarousalImage from "./CarousalImage";
const OurEfforts = () =>{
    return(
        <div
            style={{
                width:"100%",
                display:"flex",
                height:"auto",
                flexDirection:"column",
                alignItems:"center",
                backgroundColor:"rgba(224, 106, 5, 0.1)"
,
                
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
                        // fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28.8px",
                        letterSpacing: "0.06em",
                        textAlign:"center",

                    }}>
                        Fruits of
                    </p>
                    <p className="sectionHeading" style={{
                    color:"black",
                  
                    }}>
                    OUR EFFORTS
                    </p> 
                </div>
            </div>
            <CarousalImage />

        </div>
    )
}


export default OurEfforts;