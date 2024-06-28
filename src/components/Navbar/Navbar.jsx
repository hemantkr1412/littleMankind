// import Logo from '../../assets/IUCILA____logo_horizo__color.png';
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import DonateButton from "../Donate/DonateButton";
const Navbar = ({handleScroll,heroSection,projects,about,joinus,contact}) =>{
    const navigate = useNavigate()
    const buttonStyle = {
        background: 'white',
        padding: '10px 20px',
        color: 'black',
        cursor: 'pointer',
        fontSize: '16px',
        border: 'none',
        position: 'relative',
        zIndex: 1,
        borderRadius: '50px', // Added border radius to match the gradient border
        transition: 'background 0.3s ease' // Smooth transition
    };
    
    const gradientBorderStyle = {
        position: 'absolute',
        top: '-4px',
        left: '-4px',
        right: '-4px',
        bottom: '-4px',
        zIndex: -1,
        borderRadius: '50px',
        background: 'linear-gradient(104.61deg, rgba(0, 0, 0, 0.6) 7.21%, #EFEFEF 26.13%, #8C18E7 56.01%)',
    };
    


    return(
        <>
        <div
        className="navbar"
         style={{
            
            backgroundColor:"white",
            // borderBottom:"10px solid #AC364F",
            
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <img src="/mankind.svg" alt="logo" style={{width:"150px", height:"80px",marginLeft:"20px"}}/>

            <div style={{
                display:"flex",
                gap:"60px",
                color:"black",
            
            }}>
                <p className="para-link" onClick={()=>{
                    navigate('/')
                    handleScroll(heroSection)
                }}>Home </p>
                <p className="para-link" onClick={()=>{
                     navigate('/')
                    handleScroll(projects)
                }}>Projects</p>
                <p className="para-link" onClick={()=>{
                     navigate('/')
                    handleScroll(about)
                }}>About</p>
                <p className="para-link" onClick={()=>{
                     navigate('/')
                    handleScroll(joinus)
                }}>Join Us</p>  
                <p className="para-link" onClick={()=>{
                     handleScroll(contact)
                     navigate('/')
                }}>Contact</p>

            </div>

            <div style={{
                marginRight:"20px"
            }}>
                {/* <div style={{ position: 'relative', display: 'inline-block' }} onClick={() => {
                    window.scrollTo(0, 0); // Scroll to top
                    navigate('/donate');   // Navigate to the donate page
                }}>
                    <button style={buttonStyle}>
                      <img src="./donateIcon.png" alt="donate" /> DONATE
                    </button>
                    <div style={gradientBorderStyle}></div>
                </div> */}
                <DonateButton 
                handleClick = {
                    ()=>{
                        window.scrollTo(0, 0); // Scroll to top
                        navigate('/donate'); 
                    }
                }
                />

            </div>
        </div>



        <div className="mobileNavbar">
            <div style={{
                 marginLeft:"20px"
            }}><img src="./menuIcon.svg" alt="Menu" /></div>
            <div style={{
                 marginRight:"20px"
            }}>
                        <div style={{ position: 'relative', display: 'inline-block' }} onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate('/donate');   // Navigate to the donate page
                        }}>
                    <button style={buttonStyle}>
                      <img src="./donateIcon.png" alt="donate" /> DONATE
                    </button>
                    <div style={gradientBorderStyle}></div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Navbar;