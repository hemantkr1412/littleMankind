
import { useState } from "react";
import "./donate.css"
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";

const Donate = ()=>{
  useEffect(() => {
    window.scrollTo(0, window.innerHeight / 1.1);
  }, []);

    const [donorDetails,setDonorDetails] = useState({
      name:"",
      email:"",
      phone:"",
      ammount:"",
      panCard:""
    });

  let [loading, setLoading] = useState(false);
  



    





    const handleChange = (e) =>{
      setDonorDetails({
        ...donorDetails,
        [e.target.name]:e.target.value
      })
    }

    const paymentHandler = async (event) => {
      setLoading(true)
        // console.log(donorDetails)
        const amount = Number(donorDetails.ammount)*100
        const currency = 'INR';
        const receiptId = '1234567890';

        if(amount === 0|| donorDetails.name === "" ||  donorDetails.phone === "" ){
          alert("Please Fill the required data");
          setLoading(false)
          return ;
        }
    
        const response = await fetch('https://littlemankindserver.onrender.com/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId
          })
        })
    
          const order = await response.json();
          console.log('order', order);

          if(order.id){
            var option = {
              key:"rzp_live_ozVsHub3NjAF4M",
              amount,
              currency,
              name:"Little ManKind",
              description: "Test Transaction",
              image:"https://littlemankind.xyz/mankind.svg",
              order_id:order.id,
              handler: async function(response) {
                
                const body = {...response, name:donorDetails.name,
                  email:donorDetails.email,
                  phoneNumber:donorDetails.phone,
                  panCard:donorDetails.panCard,
                  amount:donorDetails.ammount
                }
             
      
                const validateResponse = await fetch('https://littlemankindserver.onrender.com/validate', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
      
                })
      
                const jsonResponse = await validateResponse.json();
      
                console.log('jsonResponse', jsonResponse);
                setDonorDetails({
                  name:"",
                  email:"",
                  phone:"",
                  ammount:"",
                  panCard:""
                });
                setLoading(false)
                
              },
              prefill: {
                name: donorDetails.name, 
                email: donorDetails.email,
                contact: donorDetails.phone, 
              },
              notes: {
                address: "Razorpay Corporate Office",
              },
              theme: {
                color: "#030016",
              },
            }
      
            var rzp1 = new Razorpay(option);
            rzp1.on("payment.failed", function(response) {
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.order_id);
              alert(response.error.metadata.payment_id);
            })
      
            rzp1.open();
            event.preventDefault();
          }else{
            alert("Something went wrong! Try Again");
            setLoading(false)
          }
    
    
         
    }

    





    return(
        <>
        <div 

        className="donateMainContainer"
        style={{
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
            height:"150px",
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
        <div 
        className="donateSubContainer"
        
        style={{
            background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
            height:"auto",
            // width:"100%",
            display:"flex",
            // alignItems:"center",
            // padding:"3rem",
            justifyContent:"space-between",
            gap:"3rem"
        }}>
            <div 
                className="donationForm"
                style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem" // Adding gap between the elements for better spacing
                }}>
                <label>Name*</label>
                <input name="name" value={donorDetails.name} type="text" onChange={(e) =>handleChange(e)}/>
                <label>Email</label>
                <input name="email" value={donorDetails.email}  type="email" onChange={(e) =>handleChange(e)}/>
                <label>Phone*</label>
                <input name="phone" value={donorDetails.phone} type="text" onChange={(e) =>handleChange(e)}/>
                <label>Your Contribution amount *</label>
                <input name="ammount" value={donorDetails.ammount} type="number" onChange={(e) =>handleChange(e)} />
                {/* <p>Tax exemption receipt will be issued once we receive the 80G certificate.</p> */}
                <label>PAN Card Number</label>
                <input name="panCard" value={donorDetails.panCard} type="text" onChange={(e) =>handleChange(e)}/>
                <button
                onClick={paymentHandler}
                style={{
                  alignSelf: "center",
                  padding: "0.5rem 1rem",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disabled={loading} // Disable button during loading
              >
                    {loading ? <ClipLoader size={16} color={"#ffffff"} /> : "Donate"}
                </button>
                </div>

            <div 
            className="accountDetailsContainer"
            style={{
                display:"flex",
                flexDirection:"column",
            
            }}>

                <p className='gradient-text'
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
                    Little mankind trust
                    <br />
                    Current Account  <br />
                    Account # 50200101064724 <br />
                    HDFC Bank, Yemalur Branch, <br />
                    Bangalore - 560037 <br />
                    IFSC code - HDFC0009489  <br />
                    {/* MICR Code - 560002108  <br /> */}
                    </p>

                    <p style={{marginTop:"2rem"}} className="accoutnDetails">
                    Write to us at littlemankind2024@gmail.com <br />
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