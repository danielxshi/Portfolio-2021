// Import images
import BOSSTEP from './images/boss-1000x600.webp';
import TTA from './images/TTAAnimationCover.webp';
import MainEvent from './images/mainevent.gif';
import TeamPhantom from './images/teamphantom.gif';
import resume from './images/danielshi-resume.pdf';
import smallBosstep from './images/bosstep/bosstep300w.jpg';
import smallCliq from './images/cliq/cliq300w.jpg';
import lrgCliq from './images/cliq/cliq1000w.jpg';
import lrgTrack from './images/track/track1000w.jpg';
import smallTrack from './images/track/track300w.jpg';

// Import components
import About from './components/Home/AboutModule';
import ProjectCard from './components/Home/ProjectCard';
import DesktopProjectCard from './components/Home/DesktopProjectCard';

// Import dependencies
import projectMessages from './components/ProjectMessages.js'
import { gsap } from "gsap";
import React, { useEffect, useRef} from 'react';




const Home = () => {

    let line1 = useRef(null);
    let line2 = useRef(null);
    // let line3 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 1.6, {
            delay: 0.3,
            ease: "power3.out",
            y: 470,
            stagger: {
                amount: 0.08
            }
        })
    }, [line1, line2]);

    return (
        

    <main className="landing-pg">
    <div className="intro-wrapper">
        <div className="grid-container grid-gap-add">
            <div className="max-bleed intro-text-banner">
                <div className="p-identity">
                    <div className="line-wrap-1">
                        {/* Desktop */}
                        <h1>
                            <div ref={el => line1 = el} className="text-banner">
                                <span className="text-banner-desktop">Front<strong className="highlight-text">-</strong>end developer</span>
                            </div>
                            <div ref={el => line2 = el} className="text-banner">
                                <span className="text-banner-desktop">and UX<strong className="highlight-text">/</strong>UI designer </span>
                            </div>
                            

                        </h1>
                        {/* <h1 ref={el => line1 = el} className="text-banner">
                            <span className="text-banner-desktop">Aspiring front<strong className="highlight-text">-</strong>end developer</span>
                        </h1>
                        <h1 ref={el => line2 = el} className="text-banner">
                            <span className="text-banner-desktop">and UX<strong className="highlight-text">/</strong>UI designer </span>
                        </h1> */}
                    </div>
                    {/* <div className="line-wrap-2">
                        <p className="line-wrap" ref={el => line2 = el}>Aspiring UX/UI web developer and photographer from Vancouver, BC</p>
                    </div> */}
                </div>
            </div>
            <div className="max-bleed media-links">
                <a className="black-border-btn primary-btn static-btn" target="_blank" href={resume}>Resume</a>
                <a className="black-border-btn primary-btn static-btn" href="mailto:danielxshi@hotmail.com">Email</a>
            </div>
        </div>
    </div>
    

    <section>
        {/* <div className="grid-container section-title-wrapper">
            <div className="max-col">
                <h2 className="section-title">Projects<strong className="highlight-text">_</strong></h2>
            </div>
        </div> */}
        
    <DesktopProjectCard 
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

    <About/>

    <section className="project-1 otr-proj-sect">
        <div className="grid-container">
            <div className="max-bleed">
                <h2 className="home-sub-heading">More projects 🥳<strong className="highlight-text">_</strong></h2>
                <div className="sub-container otr-proj-container">
                    <div className="otr-proj-spec-wrapper otr-proj-1">
                        <div className="otr-proj portfolio-item img-fit proj-home-grid-def-maintain-w">
                            <a target="_blank" href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
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
                            <a target="_blank" href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
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
                            <a target="_blank" href="https://youtu.be/yjXwb3fFqHA">
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
                        {/* <p>Four month documentary of Team Phantom's eletric race car design journey</p> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    </main>
  );
}

export default Home;
