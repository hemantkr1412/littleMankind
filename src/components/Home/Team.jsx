const Team = ({about}) =>{
    return(
        <div
        ref={about}
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
                background:"linear-gradient(110.59deg, #030016 0%, #130058 100%)",
                height:"469px",
                borderRadius:"10px",
                display:"flex",
                flexDirection:'column',
                alignItems:"center",
                padding:"3rem"
            }}>
                <h1
                    style={{
                        color:"white"
                    }}
                >OUR TEAM</h1>

                <div style={{
                    // width:"100%",
                    marginTop:"3rem",
                    display:'flex',
                    gap:"10rem",
                    // justifyContent:"space-around"
                    
                }}>

                    <div>
                        <img src="./Team2.png" alt="Image" />
                        <p style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            lineHeight: "24px",
                            letterSpacing: "0.06em",
                            textAlign: "center",
                            color:"rgba(255, 255, 255, 0.8)"
                        }}>Founder and Director</p>
                        <p style={{

                        fontSize: "24px",
                        fontWeight: "500",
                        lineHeight: "36px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                         color:"white"
                        }}>
                        VINYA
                        </p>
                    </div>
                    <div>
                    <img src="./Team1.png" alt="Image" />
                    <p style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            lineHeight: "24px",
                            letterSpacing: "0.06em",
                            textAlign: "center",
                             color:"rgba(255, 255, 255, 0.8)"
                        }}>Founder and Director</p>
                        <p style={{

                            fontSize: "24px",
                            fontWeight: "500",
                            lineHeight: "36px",
                            letterSpacing: "0.06em",
                            textAlign: "center",
                            color:"white"
                        }}>
                             YASHIKA
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Team;