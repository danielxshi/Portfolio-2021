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
            y: 380,
            stagger: {
                amount: 0.15
            }
        })
    }, [line1, line2]);

    return (
        

    <main className="landing-pg">
    <div className="intro-wrapper">
        <div className="grid-container">
            <div className="max-col intro-text-banner">
                <div className="p-identity">
                    <div className="line-wrap-1">
                        {/* Desktop */}
                        <h1 ref={el => line1 = el} className="text-banner">
                            <span className="text-banner-desktop">Aspiring front<strong class="highlight-text">-</strong>end developer</span>
                        </h1>
                        <h1 ref={el => line2 = el} className="text-banner">
                            <span className="text-banner-desktop">and UX<strong class="highlight-text">/</strong>UI designer </span>
                        </h1>
                    </div>
                    {/* <div className="line-wrap-2">
                        <p className="line-wrap" ref={el => line2 = el}>Aspiring UX/UI web developer and photographer from Vancouver, BC</p>
                    </div> */}
                </div>
            </div>
            <div className="max-col media-links">
                <a className="black-border-btn primary-btn static-btn" target="_blank" href={resume}>Resume</a>
                <a className="black-border-btn primary-btn static-btn" href="mailto:danielxshi@hotmail.com">Email</a>
            </div>
        </div>
    </div>
    
    <ProjectCard 
        lrgGraphic={BOSSTEP} 
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
        lrgGraphic={lrgCliq} 
        smGraphic={smallCliq} 
        alt={"CLIQ graphic"} 
        title={projectMessages.cliq.title} 
        overview={projectMessages.cliq.description} 
        role={projectMessages.cliq.role}
        color={'color-stripe-green'} 
        linkTo={'/cliq'}
        tabColor={"green-tab"} 
    />

    
    <section className="project">
        <div className="sub-container">
            <div className="color-stripe-container-1">
                <div className="color-stripe-blue color-stripe-1"></div>
            </div>
            <div className="max-col row-start-1">
                <div className="grid-container">
                    <div className="color-stripe-container-2">
                        <div className="color-stripe-blue color-stripe-2"></div>
                    </div>
                </div>
            </div>
            <div className="max-bleed row-start-1">
                <div className="grid-container blue-tab neu-shadow">
                    <div className="portfolio-item img-contain proj-home-grid-def">
                        {/* <Link to='/track' exact> */}
                            <picture>
                                <source srcset={lrgTrack} media="(min-width: 800px)" />
                                <source srcset={smallTrack} media="(min-width: 400px)" />
                                <img src={smallTrack} />
                            </picture>
                        {/* </Link> */}
                    </div>
                    <div className="project-description">
                        <div className="sub-container">
                            <div className="title-wrapper desktop-project-header">
                                <h2>{projectMessages.track.title}</h2>
                                <p>{projectMessages.track.description}</p>
                            </div>
                            <div className="contribution-wrapper-r rel-margin-bot">
                                <h3>Role:</h3>
                                <p>{projectMessages.track.role}</p>
                            </div>
                            <a className="disable-btn" to='/track'>Coming soon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Recent Achievements */}
    <section className="project">
        <div className="grid-container">
            <div className="max-col">
                <h2 className="rel-margin-bot">Noteable Achievements<strong className="highlight-text">_</strong></h2>
            </div>
            <div className="max-col">
                <div className="sub-container">
                    <div className="anchor-80-right">
                        <div className="anchor-80-left rel-margin-bot">
                            <p><strong>President's Honour Roll SFU</strong> - June 18, 2020</p>
                            <p>Maintained a minimum TGPA of 4.00 in Spring 2020 with at least 12 units counted towards the grade point average.</p>
                        </div>
                        <div className="anchor-80-left rel-margin-bot">
                            <p><strong>Web Development Instrutor @EmergeSFU</strong> - Janurary 27, 2021 - March 3, 2021</p>
                            <p>Instructed a multidisciplinary cohort of 15-50 students for EmergeSFU in the basics of HTML and CSS.</p>
                            <p>Over the course of 5 weekly sessions we worked towards developing skills to create and host a personal portfolio page on Github.</p>
                        </div>
                        <div className="anchor-80-left rel-margin-bot">
                            <p><strong>Presenter at 2021 FCAT Undergraduate Conference </strong> - March 05 2021</p>
                            <p>Showcased a renewable battery monitor mobile application. Designed in IAT333 Interactions Design, along with the team  (Cassandra, Keith and Nisha).</p>
                        </div>
                        <div className="anchor-80-left rel-margin-bot">
                            <p><strong>Spring 2021 Project Showcase - SCHOOL OF INTERACTIVE ARTS &amp; TECHNOLOGY</strong> - In Process... 🤓</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <About/>

    <section className="project-1 otr-proj-sect">
        <div className="grid-container">
            <div className="max-col">
                <h2>More projects 🥳<strong className="highlight-text">_</strong></h2>
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
