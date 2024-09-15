import "./footer.css";
const Footer = ()=>{
    return(
        <div 

        className="footerMainContainer"
        
        style={{
            marginTop:"4rem",
            width:"100%",
            display:"flex",
            flexDirection:'column',
            alignItems:"center",
            background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
            color:"white",
        }}>
            <div 
            className="footerSubContainer"
            style={{
                marginTop:"6rem",
                // width:"80%",
                display:"flex",
                justifyContent:"space-between"
            }}>
                <div  className="footerImageContainer">
                    <img className="imageContainer" src="./large_littlemankind2.svg" alt="Icon" />
                    <p>Lets save Mankind</p>
                </div>
                <div className="footerTextContainer">
                    <p style={{
                        fontFamily: "Syne",
                       
                    }}>8th Block, Prestige Kew Gardens,<br />  Yemlur, Bangalore 560037 ,</p>
                    <div
                     className="footerContainerSocialIcon"
                     style={{
                        display:"flex",
                        gap:"1rem",
                        justifyContent:"center",
                        marginTop:"2rem"
                    }}>
                        <img src="./instIcon.svg" alt="Instagram" />
                        <img src="./facebookIcon.svg" alt="Instagram" />
                        <img src="./linkdIcon.svg" alt="Instagram" />
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