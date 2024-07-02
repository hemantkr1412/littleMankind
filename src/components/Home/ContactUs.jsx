const ContactUs = ({contact})=>{
    return(
        <div
        ref={contact}
        style={{
          marginTop: "5rem",
          width: "100%",
          height: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        //   justifyContent: "center",
          background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
          position: "relative" // Change absolute to relative for proper positioning of children
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <img
            src="./c5162364452739932a67fa573a7b7c1c.png"
            alt="little Mankind"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure image covers the div
              opacity: "0.3"
            }}
          />
        </div>
      
        <div
          style={{
            zIndex: 2,
            position: "relative",
            width: "70%",
            display: "flex",
            justifyContent: "center",
            flexDirection:"column",
            alignItems:"center"
          }}
        >
          <p 
          className="sectionHeading"
            style={{
              color: "white",
              
              marginTop: "80px"
            }}
          >
            CONTACT
          </p>
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
                        Want to know more?
                </p>
                <p style={{
                    marginTop:"8rem",
                    fontFamily: "Syne",
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "28.8px",
                    letterSpacing:"0.06em",
                    textAlign:"center",
                    color:"white"
                }}> WRITE TO US AND WE SHALL GET BACK TO YOU</p>
                <div 
                className="contactUsEmailBox"
                style={{
                    marginTop:"9rem",
                    backgroundColor:"rgba(12, 12, 110, 1)",
                    color:"white",
                    boxShadow: "2px 3px 16px 0px rgba(255, 255, 255, 0.4)",
                    
                
                }}>
                    <p style={{
                        fontFamily: "Syne",
                    }}>hello@littlemankind.xyz</p>
                </div>
        </div>
      </div>
    )
}

export default ContactUs;