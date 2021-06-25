// Import images
import TTA from './images/TTAAnimationCover.webp';
import MainEvent from './images/mainevent.gif';
import TeamPhantom from './images/teamphantom.gif';
import resume from './images/danielshi-resume.pdf';
import smallBosstep from './images/bosstep/bosstep300w.jpg';
import smallCliq from './images/cliq/cliq300w.jpg';
import smallTrack from './images/track/track300w.jpg';

// Import components
import About from './components/Home/AboutModule';
import ProjectCard from './components/Home/ProjectCard';
import DesktopProjectCard from './components/Home/DesktopProjectCard';


// Import test images
import t1 from './images/TestImages/dubai.png';
import t2 from './images/TestImages/announcer.jpg';
import t4 from './images/TestImages/yvr.JPG';
import t5 from './images/TestImages/sfu-night.png';
import t6 from './images/TestImages/sfu-day.jpg';


// Import dependencies
import projectMessages from './components/ProjectMessages.js'
import { gsap } from "gsap";
import React, { useEffect, useRef} from 'react';




const Home = () => {

    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);
    let line6 = useRef(null);

    useEffect(() => {
        gsap.from([line1], 1.6, {
            delay: 0.3,
            opacity: 0,
            ease: "power3.out",
            // x: 470,
            stagger: {
                amount: 0.08
            }
        })
    }, [line1]);


    useEffect(() => {
        gsap.from([line3, line4, line5], 1.6, {
            // opacity: 0,
            delay: .9,
            ease: "power3.out",
            y: 80,
            stagger: {
                amount: 0.08
            }
        })
    }, [line3, line4, line5]);




    useEffect(() => {
        gsap.from([line6], 1.6, {
            opacity: 0,
            delay: .8,
            ease: "power3.out",
            x: 80,
            stagger: {
                amount: 0.24
            }
        })
    }, [line6]);

    return (
        

    <main className="landing-pg">
    <div className="intro-wrapper">
        <div className="grid-container nav-grid-template">
            <div className="max-bleed intro-text-banner">
                <div className="overflow-wrap text-banner-desktop-wrapper">
                    {/* Desktop */}
                    <h1 ref={el => line1 = el} >
                        <div 
                            className="text-banner text-banner-1">
                            <span 
                                className="no-highlight text-banner-desktop">
                                PORT
                            </span>
                        </div>
                        <div 
                             
                            className="text-banner text-banner-2">
                            <span       
                                className="no-highlight text-banner-desktop">
                                TFOLIO
                            </span>
                        </div>
                    </h1>
                </div>
            </div>
            <div 
                className="overflow-wrap banner-sub-heading ">
                    <div className="title-group rel-margin-bot">
                        <h2 ref={el => line3 = el}>
                            UXUI Designer
                        </h2>
                        <h2 ref={el => line4 = el}>
                            Photographer
                        </h2>
                        <h2 ref={el => line5 = el}>
                            Front-end developer
                        </h2>
                    </div>
                    <div ref={el => line6 = el} className="media-links">
                        <a 
                            className="black-border-btn primary-btn static-btn" 
                            target="_blank" rel="noopener noreferrer" 
                            href={resume}>
                            Resume
                        </a>
                        <a  
                            className="black-border-btn primary-btn static-btn" 
                            href="mailto:danielxshi@hotmail.com">
                            Email
                        </a>

                    </div>
            </div>
            {/* <div className="city-info">
                <div className="info-wrapper">
                    <p>
                        Vancouver, BC
                    </p>
                </div>
            </div> */}
        </div>
    </div>
    




    <div className="underline-container max-col">
        <div className="underline"></div>
    </div>

    <section id="projects">
        <div className="grid-container section-title-wrapper grid-gap-add">
            <div className="max-bleed">
                <h2 className="section-title section-title-space">Projects<strong className="highlight-text">_</strong></h2>
            </div>
        </div>
        
    
    <DesktopProjectCard 
        lrgGraphic={smallCliq} 
        smGraphic={smallCliq} 
        alt={"CLIQ graphic"} 
        title={projectMessages.bosstep.title} 
        overview={projectMessages.bosstep.overview} 
        role={projectMessages.bosstep.role}
        color={'color-stripe-red'} 
        linkTo={'/bosstep'}
        tabColor={"red-tab"} 
        projectNumber={"01"}
    />
    
    <DesktopProjectCard 
        lrgGraphic={smallCliq} 
        smGraphic={smallCliq} 
        alt={"CLIQ graphic"} 
        title={projectMessages.cliq.title} 
        overview={projectMessages.cliq.description} 
        role={projectMessages.cliq.role}
        color={'color-stripe-green'} 
        linkTo={'/cliq'}
        tabColor={"green-tab"}
        projectNumber={"02"}
    />
    
    <DesktopProjectCard 
        lrgGraphic={smallTrack} 
        smGraphic={smallTrack} 
        alt={"Moment Track graphic"} 
        title={projectMessages.track.title} 
        overview={projectMessages.track.description} 
        role={projectMessages.track.role}
        color={'color-stripe-blue'} 
        linkTo={'/track'}
        tabColor={"blue-tab"} 
        projectNumber={"03"}
    />
        
    <ProjectCard 
        lrgGraphic={smallBosstep} 
        smGraphic={smallBosstep} 
        alt={"BOSSTEP Graphic"} 
        title={projectMessages.bosstep.title} 
        overview={projectMessages.bosstep.overview} 
        role={projectMessages.bosstep.role}
        color={'color-stripe-red'} 
        linkTo={'/bosstep'}
        tabColor={"red-tab"}
    />
    
    <ProjectCard 
        lrgGraphic={smallCliq} 
        smGraphic={smallCliq} 
        alt={"CLIQ graphic"} 
        title={projectMessages.cliq.title} 
        overview={projectMessages.cliq.description} 
        role={projectMessages.cliq.role}
        color={'color-stripe-green'} 
        linkTo={'/cliq'}
        tabColor={"green-tab"} 
    />
    
    <ProjectCard 
        lrgGraphic={smallTrack} 
        smGraphic={smallTrack} 
        alt={"Moment Track graphic"} 
        title={projectMessages.track.title} 
        overview={projectMessages.track.description} 
        role={projectMessages.track.role}
        color={'color-stripe-blue'} 
        linkTo={'/track'}
        tabColor={"blue-tab"} 
    />
    </section>




    <div className="underline-container max-col">
        <div className="underline"></div>
    </div>

    <section id="photography" className="photo-grid grid-container project-spacer">
        <div className="max-bleed">
            <h2 className="section-title section-title-space">Photo<strong className="highlight-text">_</strong></h2>
            <div className="sub-container grid-gap-add">
                <div className="max-col">
                    <div className="img-fit">
                        <img src={t1} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img src={t4} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img src={t6} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img src={t5} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img src={t2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>




    <div className="underline-container max-col">
        <div className="section-divider"></div>
    </div>

    <About id="about"/>

    <div className="underline-container max-col">
        <div className="section-divider"></div>
    </div>

    <section className="project-1 otr-proj-sect">
        <div className="grid-container">
            <div className="max-bleed">
                <h2 className="section-title section-title-space">More projects 🥳<strong className="highlight-text">_</strong></h2>
                <div className="sub-container otr-proj-container">
                    <div className="otr-proj-spec-wrapper otr-proj-1">
                        <div className="otr-proj portfolio-item img-fit proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
                                <img src={TTA} alt="Top Ten Animation Project Graphic"/>
                            </a>
                        </div>
                        <h3>
                            <div className="underscore-cta">
                                <a href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
                                    Maya Animation - Goku vs Frieza
                                </a>
                            </div>
                        </h3>
                        <p>Janurary 2021 - April 2021</p>
                        <p><strong>Role</strong> - rigging, sequencing, editing and sound design.</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-2">
                        <div className="otr-proj-1 otr-proj portfolio-item img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
                                <img src={MainEvent} alt="The Main Event GIF"/>
                            </a>
                        </div>
                        <h3>
                            <div className="underscore-cta">
                                <a href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
                                    The Main Event 2019
                                </a>
                            </div>
                        </h3>
                        <p>October 2019</p>
                        <p><strong>Role</strong> - videographer</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-3">
                        <div className="otr-proj-1 otr-proj portfolio-item img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/yjXwb3fFqHA">
                                <img src={TeamPhantom} alt="Team Phantom GIF"/>
                            </a>
                        </div>
                        <h3>
                            <div className="underscore-cta">
                                <a href="https://youtu.be/yjXwb3fFqHA">
                                    Team Phantom
                                </a>
                            </div>
                        </h3>
                        <p>Janurary 2021 - April 2021</p>
                        <p><strong>Role</strong> - cinematographer and colorist</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </main>
  );
}

export default Home;
