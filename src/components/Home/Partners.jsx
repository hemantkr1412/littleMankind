const Partners = ({partners})=>{
    return(
        <div
        ref={partners}
        style={{
            marginTop:"5rem",
            width:"100%",
            display:"flex",
            height:"auto",
            flexDirection:"column",
            alignItems:"center",
            backgroundColor:"white",
            
        }}
        >
             <div style={{
                width:"80%",
                marginTop:"80px"
            }}>
                 <div style={{
                
                }}>
                    <p style={{
                    color:"black",
                    fontWeight:"700",
                    fontSize:"50px",
                    lineHeight:"75px",
                    textAlign:"center",
                    }}>
                    OUR PARTNERS
                    </p> 
                </div>
                <div
                className="ourPartnerSub"
                 style={{
                    marginTop:"3rem",
                    width:"100%",
                    // border:"2px solid black",
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>
                    <div style={{
                        width:"200px",
                        height:"200px",
                        background: "linear-gradient(225deg, #4336BE 0%, #05031A 100%)",
                        boxShadow: "3px 3px 10px 0px rgba(11, 0, 105, 0.7)",
                        borderRadius:"12px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <div style={{
                            width: "144px",
                            height: "99px",
                            padding: "12px",
                            gap: "10px",
                            borderRadius: "12px",
                            backgroundColor:"white",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"

                            
                        }}>
                             <img src="./luminousLogo.png" alt="luminousLogo" /> 
                        </div>
                        
                    </div>
                    <div style={{
                        width:"200px",
                        height:"200px",
                        background: "linear-gradient(225deg, #4336BE 0%, #05031A 100%)",
                        boxShadow: "3px 3px 10px 0px rgba(11, 0, 105, 0.7)",
                        borderRadius:"12px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <div style={{
                            width: "144px",
                            height: "99px",
                            padding: "12px",
                            gap: "10px",
                            borderRadius: "12px",
                            backgroundColor:"white",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"

                            
                        }}>
                             <img src="./canadianSolar.png" alt="luminousLogo" /> 
                        </div>
                        
                    </div>
                    <div style={{
                        width:"200px",
                        height:"200px",
                        background: "linear-gradient(225deg, #4336BE 0%, #05031A 100%)",
                        boxShadow: "3px 3px 10px 0px rgba(11, 0, 105, 0.7)",
                        borderRadius:"12px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <div style={{
                            width: "144px",
                            height: "99px",
                            padding: "12px",
                            gap: "10px",
                            borderRadius: "12px",
                            backgroundColor:"white",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"

                            
                        }}>
                             <img src="./waareesSolar.png" alt="luminousLogo" /> 
                        </div>
                        
                    </div>
                    <div style={{
                        width:"200px",
                        height:"200px",
                        background: "linear-gradient(225deg, #4336BE 0%, #05031A 100%)",
                        boxShadow: "3px 3px 10px 0px rgba(11, 0, 105, 0.7)",
                        borderRadius:"12px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <div style={{
                            width: "144px",
                            height: "99px",
                            padding: "12px",
                            gap: "10px",
                            borderRadius: "12px",
                            backgroundColor:"white",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"

                            
                        }}>
                             <img src="./AdaniSolar.png" alt="luminousLogo" /> 
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Partners;