const Footer = ()=>{
    return(
        <div style={{
            marginTop:"4rem",
            width:"100%",
            display:"flex",
            flexDirection:'column',
            alignItems:"center",
            background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
            height:"300px",
            color:"white",
        }}>
            <div style={{
                marginTop:"6rem",
                width:"80%",
                display:"flex",
                justifyContent:"space-between"
            }}>
                <div>
                    <img src="./large_littlemankind2.png" alt="Icon" style={{
                        marginLeft:"2rem"
                    }}/>
                    <p style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        lineHeight: "33px",
                        letterSpacing: "0.06em",
                        textAlign: "center"
                        
                    }}>Lets save mankind</p>
                </div>
                <div>
                    <p style={{
                        fontFamily: "Syne",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "21.6px",
                        textAlign: "center"
                        
                    }}>Kumaris , Kargundha Main Road ,<br /> Kargundha Post , North Coorg ,571201</p>
                    <div style={{
                        display:"flex",
                        gap:"1rem",
                        justifyContent:"center",
                        marginTop:"2rem"
                    }}>
                        <img src="./instIcon.png" alt="Instagram" />
                        <img src="./facebookIcon.png" alt="Instagram" />
                        <img src="./linkdIcon.png" alt="Instagram" />
                    </div>
                </div>

            </div>
           <div style={{
            marginTop:"2rem"
           }}>
            <p style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.8)"
            }}>© 2024 by Little Mankind. All rights reserved</p>
          </div> 
        </div>
    )
}

export default Footer;