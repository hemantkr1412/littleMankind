import React, { useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Donate from "./components/Donate/Donate";
import AnimalWelfare from "./components/Projects/AnimalWelfareProject";
import ChildrenWelfare from "./components/Projects/ChildrenWlfare";
import WomenWelfare from "./components/Projects/WomenWelafre";
import Forest from "./components/Projects/Forest";
import PrivacyPolicy from "./components/PrivacyDocuments/PrivacyPolicy";
import TermsAndConditions from "./components/PrivacyDocuments/TermsAndCondition";
import RefundPolicy from "./components/PrivacyDocuments/RefundPolicy";

function App() {
  const heroSection = useRef(null)
  const projects = useRef(null);
  const about = useRef(null);
  const joinus = useRef(null);
  const contact = useRef(null);
  const mission = useRef(null);
  const partners = useRef(null)
 

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
           mission={mission}
           partners={partners}
     />
     <Routes>
     <Route path="/" element={ <Home 
                handleScroll={handleScroll}
                heroSection={heroSection}
                projects={projects}
                about={about}
                joinus={joinus}
                contact={contact}
                mission={mission}
                partners={partners}
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
      <Route path="/privacy-policy"
      element={
        <PrivacyPolicy />
      }/>
      <Route path="/terms-and-condition"
      element={
        <TermsAndConditions />
      }/>
       <Route path="/refund-policy"
      element={
        <RefundPolicy />
      }/>
           
     </Routes>
     <Footer />
     </Router>
     
    </div>
  )
}

export default App
