import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Donate from "./components/Donate/Donate";
import AnimalWelfare from "./components/Projects/AnimalWelfareProject";
import ChildrenWelfare from "./components/Projects/ChildrenWlfare";
import WomenWelfare from "./components/Projects/WomenWelafre";
import Forest from "./components/Projects/Forest";

function App() {
  const heroSection = useRef(null)
  const projects = useRef(null);
  const about = useRef(null);
  const joinus = useRef(null);
  const contact = useRef(null);
 

   const handleScroll = (ref) => {
    console.log(ref.current.offsetTop);
    window.scrollTo({
      top: ref.current.offsetTop-100,
      behavior: "smooth",
    });
   };

  return (
    <div >
       <Router>
     <Navbar 
          handleScroll={handleScroll}
          heroSection={heroSection}
          projects={projects}
           about={about}
           joinus={joinus}
           contact={contact}
     />
     <Routes>
     <Route path="/" element={ <Home 
                handleScroll={handleScroll}
                heroSection={heroSection}
                projects={projects}
                about={about}
                joinus={joinus}
                contact={contact}
                />} />
      <Route path="/donate"
      element={
        <Donate />
      }
      />

      <Route path="/animalWelfare"
      element={
        <AnimalWelfare />
      }
      />
      <Route path="/childrenWelfare"
      element={
        <ChildrenWelfare />
      }
      />
      <Route path="/womenWelfare"
      element={
        <WomenWelfare />
      }
      />
        <Route path="/forest"
      element={
        <Forest />
      }/>
           
     </Routes>
     <Footer />
     </Router>
     
    </div>
  )
}

export default App
