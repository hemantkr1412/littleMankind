import React, { useState } from 'react';

const buttonStyle = {
    background: '#9747FF4D',
    padding: '10px 20px',
    color: '#3B0088',
    cursor: 'pointer',
    fontSize: '16px',
    border: 'none',
    position: 'relative',
    fontWeight:"500",
    zIndex: 1,
    borderRadius: '50px', // Added border radius to match the gradient border
    transition: 'background 0.3s ease' // Smooth transition
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

const hoverStyle = {
    background: 'linear-gradient(104.61deg, rgba(0, 0, 0, 0.6) 7.21%, #EFEFEF 26.13%, #8C18E7 56.01%)'
};

const DonateButton = ({handleClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            style={{ position: 'relative', display: 'inline-block' }} 
            onClick={handleClick}
        >
            <button 
                style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src="./donateIcon.png" alt="donate" /> DONATE
            </button>
            <div style={gradientBorderStyle}></div>
        </div>
    );
};

export default DonateButton;
