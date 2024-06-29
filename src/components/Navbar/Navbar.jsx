// import Logo from '../../assets/IUCILA____logo_horizo__color.png';
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DonateButton from "../Donate/DonateButton";
import { useEffect, useState } from "react";
const Navbar = ({handleScroll,heroSection,projects,about,joinus,contact}) =>{

    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!isMenuOpen);
        };

        useEffect(() => {
            if (isMenuOpen) {
            document.body.classList.add("no-scroll");
            } else {
            document.body.classList.remove("no-scroll");
            }
        }, [isMenuOpen]);

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
            <img src="/mankind.svg" alt="logo" onClick={()=>{
                navigate('/')
            }} style={{width:"150px", height:"80px",marginLeft:"20px",cursor:"pointer"}}/>

            <div style={{
                display:"flex",
                gap:"60px",
                color:"black",
            
            }}>
                <p className="para-link" onClick={()=>{
                    navigate('/')
                    handleScroll(heroSection)
                }}>Home </p>
                <div className="dropdown1">
                    <p className="para-link2">Projects</p>
                         <div className="dropdown-content1">
                            <div className="column" style={{
                            width:"100%",
                            height:"auto"
                            }}>
                            <a onClick={()=>{
                                window.scrollTo(0, 0);
                                navigate('/animalWelfare')}}>Animal Conservation</a>
                            <a onClick={()=>{
                                window.scrollTo(0, 0);
                                navigate('/childrenWelfare')}}>Children Welfare</a>
                            <a onClick={()=>{
                                window.scrollTo(0, 0);
                                navigate('/womenWelfare')}}>Women Welfare</a>
                            <a onClick={() =>{
                                window.scrollTo(0, 0);
                                navigate('/forest')}}>Forest</a>
                            </div>
                        </div>
                </div>
               
                    
                   
                <div className="dropdown1">
                    <p className="para-link2" >About</p>
                         <div className="dropdown-content1">
                            <div className="column" style={{
                            width:"100%",
                            height:"auto"
                            }}>
                            <a onClick={()=>handleScroll()}>Mission</a>
                            <a onClick={()=>handleScroll(about)}>Team</a>
                            <a>Partners</a>
                            </div>
                        </div>
                </div>
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
                marginRight:"20px",
            }}>
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
            }}><img src="./menuIcon.svg" alt="Menu" onClick={toggleMenu}/>
            </div>
            <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="menuLogo">
            {/* <img
                onClick={toggleMenu}
                className="leftArrow"
                src="./leftArrow.webp"
            /> */}
            <img src='./arrowicon.png' onClick={toggleMenu}
                className="leftArrow" alt="arrowIcon" style={{
            transform:"rotate(180deg)"
            }}/>
            
            <Link to="/" onClick={toggleMenu}>
                <img className="Mlogo" src="/mankind.svg" />
            </Link>
            </div>
            <div className="menuList">
            <p>Home</p>
            <div className="mRedLine" />
            <Link to="/" onClick={toggleMenu}>
                <p>Projects</p>
            </Link>
            <div className="mRedLine" />
            <p>About</p>
            <div className="mRedLine" />
            <p>Join Us</p>
            <div className="mRedLine" />
            <p>Contact</p>
            <div className="mRedLine" />
            </div>
        </div>

           {!isMenuOpen && <div style={{
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

            </div>}
        </div>
        </>
    )
}

export default Navbar;