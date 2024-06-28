const WhatweDo = () => {
    return(
        <div style={{
            backgroundColor:"white",
            width:"100%",
            height:"auto",
            display:"flex",
            flexDirection:"column",
            color:"black",
            alignItems:"center"
        }}>
           <div style={{
           
           }}>
               <p style={{
                color:"black",
                fontWeight:"700",
                fontSize:"50px",
                lineHeight:"75px",
                textAlign:"center",
                 marginTop:"80px"
               }}>
                    WHAT WE DO
                </p> 
                <p
                style={{
                color:"rgb(0,0,0,0.7)",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                textAlign:"center"
                }}
                >
                    As a "Little Mankind" we focus on the below initiatives:
                </p>
           </div>

           <div>
            <ul style={{
                marginTop:"2rem",
                color:"rgb(0,0,0,0.7)",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "28px",
                letterSpacing: "0.02em",
                textAlign: "left",
                
            }}  >
                <li
                style={{
                    margin:"20px"
                }}
                
                >
                Help the animals to thrive before they become extinct and Be the voice for the voiceless.
                </li>
                <li
                style={{
                    margin:"20px"
                }}
                
                
                >
                Promoting social, economic and political empowerment of women through various policies and programmes.
                </li>
                <li
                style={{
                    margin:"20px"
                }}
                
                >
                Plant saplings and support them to become trees. We will help create urban and rural forests.
                </li>
                <li
                style={{
                    margin:"20px"
                }}
                
                >
                Help economically backward children for their education and spread awareness about the importance of education.
                </li>
               
            </ul>
           </div>

           <div 
           className="whatwedoContainer"
           style={{
            marginTop:"5rem",
            backgroundColor:"#F5F5F5",
            // width:"880px",
            // height:"300px",
            display:"flex",
            justifyContent:"space-between"

           }}
           >
            <div 
            className="whatwedoContainerSub"
            style={{
                // height:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"6rem"
            }}>
                <div
                style={{
                    width:"100%",
                    height:"50%",
                    display:"flex",
                    gap:"2rem"
                }}
                >
                    <img src="./Vector.png" alt="Image" style={{
                        width:"45px",
                        height:"40px"
                    }}/>
               
                    <div>
                    <p >ANIMAL CONSERVATION</p>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "0.02em",
                        color:"rgba(0,0,0,0.8)"
                        
                        
                    }}>Protecting Wildlife, <br /> Preserving Our Planet</p>
                    </div>
                    

                </div>
                <div
                style={{
                    width:"100%",
                    height:"50%",
                    display:"flex",
                    gap:"2rem",
                    
                }}
                >
                    <img src="./Vector2.png" alt="Image" style={{
                        width:"45px",
                        height:"40px"
                    }}/>
               
                    <div>
                    <p>CHILDREN WELFARRE</p>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "0.02em",
                        color:"rgba(0,0,0,0.8)"
                        
                        
                    }}>Nurturing the Future,<br /> One Child at a Time</p>
                    </div>
                    

                </div>


            </div>
            <div 
            className="whatwedoContainerSub2"
            style={{
                height:"100",
                display:"flex",
                flexDirection:"column",
                  gap:"6rem"
            }}>
                   <div
                style={{
                    width:"100%",
                    height:"50%",
                    display:"flex",
                    gap:"2rem",
              
                    
                }}
                >
                    <img src="./Vector3.png" alt="Image" style={{
                        width:"45px",
                        height:"45px"
                    }}/>
               
                    <div>
                    <p>WOMEN WELFARE</p>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "0.02em",
                        color:"rgba(0,0,0,0.8)"
                        
                        
                    }}>Supporting Women,<br /> Strengthening Society</p>
                    </div>
                    

                </div>
                <div
                style={{
                    width:"100%",
                    height:"50%",
                    display:"flex",
                    gap:"2rem",
        
                }}
                >
                    <img src="./Vector4.png" alt="Image" style={{
                        width:"45px",
                        height:"40px"
                    }}/>
               
                    <div>
                    <p >FORSET</p>
                    <p style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "21px",
                        letterSpacing: "0.02em",
                        color:"rgba(0,0,0,0.8)"
                        
                        
                    }}>Growing a Greener <br /> Tomorrow Togethert</p>
                    </div>
                    

                </div>

            </div>


           </div>




        
        {/* our mission section */}


        <div style={{
           
        }}>
            <p style={{
             color:"black",
             fontWeight:"700",
             fontSize:"50px",
             lineHeight:"75px",
             textAlign:"center",
              marginTop:"80px"
            }}>
               OUR MISSION
             </p> 
        </div>

        <div 
        className="ourmissionContainer"
        style={{
            marginTop:"3rem",
            width:"80%",
            display:"flex"
        }}>
            <div className="ourmissionContainersub1" >
                <p style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "27px",
                    letterSpacing: "0.02em",
                    textAlign: "justified",
                    color:"rgba(0,0,0,0.7)"
                    
                }}>Our Mission is to provide holistic education and livelihood for children in needy, Women empowerment for economically backwards, conserving Animals from their extinction and Tree plantation for environment protection.</p>
            </div>
            <div
            className="ourmissionContainersub2">
                <img src="./earth.png" alt="eart" />

            </div>
        </div>


        </div>
    )
}

export default WhatweDo;