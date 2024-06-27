const JoinUs = ({joinus})=>{
    return(
        <div
        ref={joinus}
        style={{
            marginTop:"5rem",
            width:"100%",
            display:"flex",
            height:"auto",
            flexDirection:"column",
            alignItems:"center",
            backgroundColor:"white"
,
            
        }}
        >

            <div style={{
                width:"80%",
                backgroundColor:"rgba(0,0,0,0.1)",
                height:"635px",
                borderRadius:"10px",
                display:"flex",
                flexDirection:'column',
                alignItems:"center",
                padding:"3rem"
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
                JOIN US
                </p> 
                <p 
                    className='gradient-text'
                    
                    style={{
                        marginTop:"1rem",
                        fontFamily: 'Syne, sans-serif' ,
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28.8px",
                        letterSpacing: "0.06em",
                        textAlign:"center",

                    }}>
                       JOIN US IN OUR JOURNEY TO MAKE THE WORLD A BETTER PLACE
                    </p>
            </div>

            <div style={{
                marginTop:"4rem",
                display:"flex",
                gap:"2rem"
            }}>
                
                <div className="box" style={{
                    backgroundColor:"white",
                    padding:"1rem",
                    width:"300px"
                }}>
                    <div className="box-item">
                        <img src={"./indvImage.png"}  />
                        <div className="box-text">
                        <h4>Individual</h4>
                        <p>Join the ranks of dedicated individuals and make a difference.</p>
                        </div>
                    </div>
                </div>
                <div className="box" style={{
                    backgroundColor:"white",
                    padding:"1rem",
                    width:"300px"
                }}>
                    <div  className="box-item">
                        <img src={"./csrImage.png"}  />
                        <div className="box-text">
                        <h4>Individual</h4>
                        <p>Join the ranks of dedicated individuals and make a difference.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="box" style={{
                    backgroundColor:"white",
                    padding:"1rem",
                    width:"300px"
                }}>
                    <div  className="box-item">
                        <img src={"./InstImage.png"}  />
                        <div className="box-text">
                        <h4>Individual</h4>
                        <p>Join the ranks of dedicated individuals and make a difference.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

               
            </div>

        </div>
    )
}

export default JoinUs;