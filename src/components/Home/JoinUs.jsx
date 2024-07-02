const JoinUs = ({handleScroll,joinus,contact})=>{
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

            <div className="joinMainContaainer" style={{
                width:"80%",
               
                borderRadius:"10px",
                display:"flex",
                flexDirection:'column',
                alignItems:"center",
                // padding:"3rem"
            }}>
            <div style={{
                
            }}>
                <p className="sectionHeading" style={{
                color:"black",
                
                }}>
                JOIN US
                </p> 
                <p 
                    className='gradient-text'
                    
                    style={{
                        marginTop:"1rem",
                        fontFamily: 'Syne, sans-serif' ,
                        // fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28.8px",
                        letterSpacing: "0.06em",
                        textAlign:"center",

                    }}>
                       JOIN US IN OUR JOURNEY TO MAKE THE WORLD A BETTER PLACE
                    </p>
            </div>

            <div
            className="joinusSubContainer"
             style={{
                marginTop:"4rem",
                display:"flex",
                gap:"2rem"
            }}>
                
                <div
                onClick={()=>{
                    handleScroll(contact)
                }}
                 className="box" style={{
                    backgroundColor:"white",
                    padding:"1rem",
                    width:"300px",
                    cursor:"pointer"
                    
                }}>
                    <div className="box-item">
                        <img src={"./indvImage.png"}  />
                        <div className="box-text">
                        <h4>INDIVIDUAL</h4>
                        <p>Join the ranks of dedicated individuals and make a difference.</p>
                        </div>
                    </div>
                </div>
                <div
                onClick={()=>{
                    handleScroll(contact)
                }}
                 className="box" style={{
                    backgroundColor:"white",
                    padding:"1rem",
                    width:"300px",
                    cursor:"pointer"
                    
                }}>
                    <div  className="box-item">
                        <img src={"./csrImage.png"}  />
                        <div className="box-text">
                        <h4>CSR PARTNER</h4>
                        <p>Supporting corporates to achieve their CSR goals year after year.</p>
                        </div>
                        
                    </div>
                </div>
                <div
                onClick={()=>{
                    handleScroll(contact)
                }}
                 className="box" style={{
                    backgroundColor:"white",
                    padding:"1rem",
                    width:"300px",
                    cursor:"pointer"
                    
                }}>
                    <div  className="box-item">
                        <img src={"./InstImage.png"}  />
                        <div className="box-text">
                        <h4>INSTITUTIONS</h4>
                        <p>Empowering leaders of tomorrow to be mankind lovers.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

               
            </div>

        </div>
    )
}

export default JoinUs;