
import "./donate.css"
const Donate = ()=>{
    return(
        <>
        <div style={{
            marginTop:"3rem",
            position: "relative",
            width: "100%",
            height: "100vh",
            backgroundImage: "url(./donateBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            <h1 style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "96px",
              letterSpacing: "0.08em",
              color: "white",
              textAlign: "center",
            }}>
              Support Little Acts,
              <br />
              Save Mankind
            </h1>
        </div>
        <div style={{
            width:"100%",
            height:"200px",
            backgroundColor:"rgba(249, 224, 255, 1)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>

            <h3 style={{
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "48px",
                letterSpacing: "0.28em",
                textAlign: "center",
                color:"black"
                
            }}>
                DONATE
            </h3>
        </div>
        <div style={{
            background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
            height:"100vh",
            // width:"100%",
            display:"flex",
            alignItems:"center",
            padding:"3rem",
            justifyContent:"space-between",
            gap:"3rem"
        }}>
            <div 
                className="donationForm"
                style={{
                    width: "40%",
                    height: "600px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "2rem",
                    gap: "1rem" // Adding gap between the elements for better spacing
                }}>
                <label>Name*</label>
                <input type="text" />
                <label>Email*</label>
                <input type="text" />
                <label>Phone*</label>
                <input type="text" />
                <label>Your Contribution amount *</label>
                <input type="text" />
                <p>Need Tax Exemption - PAN is mandatory</p>
                <label>Pan Card Number</label>
                <input type="text" />
                <button 
                    style={{
                    alignSelf: "center",
                    padding: "0.5rem 1rem", // Optional: Adding padding for a better look
                    fontSize: "16px", // Optional: Setting font size
                    cursor: "pointer" // Optional: Changing cursor to pointer on hover
                    }}>
                    Donate
                </button>
                </div>

            <div style={{
                width:"50%",
                height:"600px",
                display:"flex",
                flexDirection:"column",
            
            }}>

                <p 
                    className='gradient-text'
                    
                    style={{
                      
                        fontFamily: 'Syne, sans-serif' ,
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28.8px",
                        letterSpacing: "0.06em",
                        textAlign:"left",

                    }}>
                        You can also transfer your contribution to LITTLE MANKINDS' bank account.
                    </p>
                    <p className="accoutnDetails">
                    LITTLE MANKIND  <br />
                    Current Account  <br />
                    Account # 34803899434 <br />
                    State Bank Of India, Hosur Road Branch, <br />
                    Bangalore - 560100 <br />
                    IFSC code - SBIN0010514  <br />
                    MICR Code - 560002108  <br />
                    </p>

                    <p style={{marginTop:"2rem"}} className="accoutnDetails">
                    Write to us at hello@littlemankind.xyz <br />
                    after transferring your contribution
                    </p>
            </div>
            <div>

            </div>

        </div>
        </>
    )
}

export default Donate;