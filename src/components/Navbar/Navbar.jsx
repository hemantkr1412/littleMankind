// import Logo from '../../assets/IUCILA____logo_horizo__color.png';
import "./navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = ({handleScroll,heroSection,projects,about,joinus,contact}) =>{
    const navigate = useNavigate()
    const buttonStyle = {
        background: 'transparent',
        padding: '10px 20px',
        color: 'black',
        cursor: 'pointer',
        fontSize: '16px',
        border: 'none',
        position: 'relative',
        zIndex: 1,
      };
    
      const gradientBorderStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        borderRadius: '50px',
        padding: '4px', // Adjust this to match the border width
        background: 'linear-gradient(104.61deg, rgba(0, 0, 0, 0.6) 7.21%, #EFEFEF 26.13%, #8C18E7 56.01%)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      };
    return(
        <div
        className="navbar"
         style={{
            
            backgroundColor:"white",
            // borderBottom:"10px solid #AC364F",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
            <img src="/mankind.png" alt="logo" style={{width:"150px", height:"80px",marginLeft:"20px"}}/>

            <div style={{
                display:"flex",
                gap:"60px",
                color:"black",
            
            }}>
                <p className="para-link" onClick={()=>
                    navigate('/')
                }>Home </p>
                <p className="para-link" onClick={()=>{
                    handleScroll(projects)
                }}>Projects</p>
                <p className="para-link" onClick={()=>{
                    handleScroll(about)
                }}>About</p>
                <p className="para-link" onClick={()=>{
                    handleScroll(joinus)
                }}>Join Us</p>  
                <p className="para-link" onClick={()=>{
                    handleScroll(contact)
                }}>Contact</p>

            </div>

            <div style={{
                marginRight:"20px"
            }}>
                <div style={{ position: 'relative', display: 'inline-block' }} onClick={()=>
                    navigate('/donate')
                }>
                    <button style={buttonStyle}>
                      <img src="./donateIcon.png" alt="donate" /> DONATE
                    </button>
                    <div style={gradientBorderStyle}></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;