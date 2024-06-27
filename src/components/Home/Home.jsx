import HeroSection from "./Herosection";
import WhatweDo from "./WhatweDo";
import CurrentProject from "./CurrentProject";
import OurEfforts from "./OurEfforts";
import Impact from "./Impact";
import Team from "./Team";
import Partners from "./Partners";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";

const Home = ({heroSection,projects,about,joinus,contact}) =>{

    return(
        <div >
        <HeroSection heroSection={heroSection}/>
        <WhatweDo />
        <CurrentProject 
        projects={projects}
        />
        <OurEfforts />
        <Impact />
        <Team 
        about={about}
        />
        <Partners />
        <JoinUs 
        joinus={joinus}
        />
        <ContactUs 
        contact={contact}
        />

        </div>
    )
}

export default Home;