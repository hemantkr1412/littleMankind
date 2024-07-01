"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Accordian = ({ heading, text, index,setToggle,isToggled,mission,about,partners,handleScroll}) => {
	const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();
	

	const projects = [
		{
			name:"Animal Welfare",
			href: `/animalWelfare`,
		},
		{
			name:"Women Welfare",
			href: `/womenWelfare`,
		},
		{
			name:"Children Welfare",
			href: `/childrenWelfare`,
		},
		{
			name:"Forest",
			href: `/forest`,
		}
	]

    const aboutList = [
        {
            name:"Mission",
            href:'/?scroll=mission'
        },
        {
            name:"Team",
            href:'/?scroll=team'
        },
        {
            name:"Partners",
            href:'/?scroll=partners'
        },
    ]
	



	


	return (
		<div key={index}>
			<div
				onClick={() => setIsActive((prev) => !prev)}
				style={{
					padding: "0.6rem",
					borderBottom: "0.2px solid #e8e8e8",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "400",
                    marginLeft: "1rem",
                    color: "#000",

				}}>

				{heading}
				<span
					style={{
						transform: isActive ? "rotate(180deg)" : "none",
						transition: "all 0.3s",
					}}>
					{text[0]!== "" && "▼"}
				</span>
			</div>

				<div className={isActive ? "customDiv" : ""}>
				
				
				{
					text == "Projects" &&
					projects.map((link)=>{
						return(
							<div
							key={link.name}
							style={{
								padding: isActive ? "1rem 1rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "1",
								overflow: "hidden",
								transition: "all 0.3s",
                                borderBottom:isActive ?"1px solid rgba(0,0,0,0.5)":"",
                                cursor:"pointer"
							}}>
							<p 
                            style={{
                                fontSize:"1rem"
                            }}
                            onClick={() =>{
                                navigate(link.href)
                                setToggle(!isToggled)

                            }}
                            >
                                {link.name}
                            </p>
                            
							</div>
						)
					})
				}
                {
					text == "About" &&
					aboutList.map((link)=>{
						return(
							<div
							key={link.name}
							style={{
								padding: isActive ? "1rem 1rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "1",
								overflow: "hidden",
								transition: "all 0.3s",
                                borderBottom:isActive ?"1px solid rgba(0,0,0,0.5)":"",
                                cursor:"pointer"
							}}>
							<p 
                            style={{
                                fontSize:"1rem"
                            }}
                            onClick={() =>{
                                // handleScroll(link.ref)
                                navigate(link.href);
                                setToggle(!isToggled)
                                // console.log(link.ref)
                            }}
                            >
                                {link.name}
                            </p>
                            
							</div>
						)
					})
				}
				
				

				</div>
		</div>
	);
};
export default Accordian;