// Import images
import resume from './images/danielshi-resume.pdf';
import smallBosstep from './images/bosstep/bosstep300w.jpg';
import smallCliq from './images/cliq/cliq300w.jpg';
import smallTrack from './images/track/track300w.jpg';

// Import components
import About from './components/Home/AboutModule';
import ProjectCard from './components/Home/ProjectCard';
import DesktopProjectCard from './components/Home/DesktopProjectCard';
import AddProjects from './components/Home/AddProjects'
import PhotoGallery from './components/Home/PhotoGallery'
import SectionTitle from './components/Home/SectionTitle'

// Import dependencies
import projectMessages from './components/ProjectMessages.js'
import { gsap } from "gsap";
import React, { useEffect, useRef} from 'react';


const Home = () => {

    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 1.6, {
            delay: 0.3,
            ease: "power3.out",
            y: 475,
            stagger: {
                amount: 0.08
            }
        })
    }, [line1, line2]);

    return (
    <main className="landing-pg">
        <div className="intro-wrapper">
            <div className="grid-container nav-grid-template">
                <div className="max-bleed intro-text-banner">
                    <div className="overflow-wrap">
                        <h1 ref={el => line1 = el} className="overflow-wrap">
                            <span>
                                UXUI Designer | Photographer
                            </span>
                        </h1> 
                        <div ref={el => line2 = el} className="media-links">
                            <a class="black-border-btn intro-btn static-btn" target="_blank" href={resume}>Resume</a>
                            <a class="black-border-btn intro-btn static-btn" href="mailto:danielxshi@hotmail.com">Email</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    
    <SectionTitle title="Projects" id="projects"/>

    <section>
        <DesktopProjectCard 
            lrgGraphic={smallBosstep} 
            smGraphic={smallBosstep} 
            alt={"CLIQ graphic"} 
            title={projectMessages.bosstep.title} 
            overview={projectMessages.bosstep.overview} 
            role={projectMessages.bosstep.role}
            color={'color-stripe-red'} 
            linkTo={'/bosstep'}
            tabColor={"red-tab"} 
            projectNumber={"01"}
            cta={"VIEW PROCESS"}
        />
        
        <DesktopProjectCard 
            lrgGraphic={smallCliq} 
            smGraphic={smallCliq} 
            alt={"CLIQ graphic"} 
            title={projectMessages.cliq.title} 
            overview={projectMessages.cliq.overview} 
            role={projectMessages.cliq.role}
            color={'color-stripe-green'} 
            linkTo={'/cliq'}
            tabColor={"green-tab"}
            projectNumber={"02"}
            cta={"VIEW PROCESS"}
        />
        
        <DesktopProjectCard 
            lrgGraphic={smallTrack} 
            smGraphic={smallTrack} 
            alt={"Moment Track graphic"} 
            title={projectMessages.track.title} 
            overview={projectMessages.track.overview} 
            role={projectMessages.track.role}
            color={'color-stripe-blue'} 
            linkTo={'/track'}
            tabColor={"blue-tab"} 
            projectNumber={"03"}
            cta={"VIEW PROCESS"}
        />
            
        <ProjectCard 
            lrgGraphic={smallBosstep} 
            smGraphic={smallBosstep} 
            alt={"BOSSTEP Graphic"} 
            title={projectMessages.bosstep.title} 
            role={projectMessages.bosstep.role}
            linkTo={'/bosstep'}
            date={projectMessages.bosstep.date}
            cta={"VIEW PROCESS"}
        />
        
        <ProjectCard 
            lrgGraphic={smallCliq} 
            smGraphic={smallCliq} 
            alt={"CLIQ graphic"} 
            title={projectMessages.cliq.title} 
            role={projectMessages.cliq.role} 
            linkTo={'/cliq'}
            date={projectMessages.cliq.date}
            cta={"VIEW PROCESS"}
        />
        
        <ProjectCard 
            lrgGraphic={smallTrack} 
            smGraphic={smallTrack} 
            alt={"Moment Track graphic"} 
            title={projectMessages.track.title} 
            role={projectMessages.track.role}
            linkTo={'/track'}
            cta={"VIEW PROCESS"}
            date={projectMessages.track.date}
        />
    </section>

    <SectionTitle title="Photography" id="photography"/>

    <PhotoGallery/>

    <About id="about"/>

    <AddProjects/>
    </main>
  );
}

export default Home;
