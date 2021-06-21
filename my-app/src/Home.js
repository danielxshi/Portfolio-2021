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

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';

// Import test images
import t1 from './images/TestImages/dubai.png';
import t2 from './images/TestImages/announcer.jpg';
import t3 from './images/TestImages/rianna.jpg';
import t4 from './images/TestImages/yvr.JPG';
import t5 from './images/TestImages/sfu-night.png';
import t6 from './images/TestImages/sfu-day.jpg';
import t7 from './images/TestImages/tunnel.jpg';






// Import dependencies
import projectMessages from './components/ProjectMessages.js'
import { gsap } from "gsap";
import React, { useEffect, useRef} from 'react';




const Home = () => {

    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);

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


    useEffect(() => {
        gsap.from([line3], 1.6, {
            opacity: 0,
            delay: 1.5,
            ease: "power3.out",
            x: 80,
            stagger: {
                amount: 0.24
            }
        })
    }, [line3]);

    return (
        

    <main className="landing-pg">
    <div className="intro-wrapper">
        <div className="grid-container nav-grid-template">
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
                    </div>
                </div>
            </div>
            <div ref={el => line3 = el} className="button-overflow-wrap max-bleed media-links">
                <a className="black-border-btn primary-btn static-btn" target="_blank" href={resume}>Resume</a>
                <a className="black-border-btn primary-btn static-btn" href="mailto:danielxshi@hotmail.com">Email</a>
            </div>
        </div>
    </div>
    

    <section>
        <div className="grid-container section-title-wrapper grid-gap-add">
            <div className="max-bleed">
                <h2 className="section-title">Projects<strong className="highlight-text">_</strong></h2>
            </div>
        </div>
        
    
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

    <section className="photo-grid grid-container project-spacer">
        <div className="max-bleed">
            <h2 className="section-title">Photo<strong className="highlight-text">_</strong></h2>
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

    {/* <section className="photo-grid grid-container project-spacer">
        <div className="max-bleed">
            <h2 className="home-sub-heading">Photo and Video<strong className="highlight-text">_</strong></h2>
            <div className="sub-container grid-gap-add">
                <div className="max-col">
                    <div className="img-fit">
                        <img src={img43} alt="" />
                    </div>
                </div>
                <div className="max-col">
                    <div className="img-fit">
                        <img src={img43} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img src={img34} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img src={imgProf} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <About/>

    <section className="project-1 otr-proj-sect">
        <div className="grid-container">
            <div className="max-bleed">
                <h2 className="section-title">More projects 🥳<strong className="highlight-text">_</strong></h2>
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
                    </div>
                </div>
            </div>
        </div>
    </section>

    </main>
  );
}

export default Home;
