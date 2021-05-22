// Import images
import BOSSTEP from './images/boss-1000x600.png';
import CLIQ from './images/cliq-1000x600.png';
import TRACK from './images/track-1000x600.png';
import TTA from './images/TTAAnimationCover.jpg';

// Import dependencies
import projectMessages from './components/ProjectMessages.js'
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import React, { useEffect, useRef} from 'react';

const Home = () => {
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2, line3], 0.8, {
            delay: 0.3,
            ease: "power3.out",
            y: 115,
            stagger: {
                amount: 0.15
            }
        })
    }, [line1, line2]);
    return (

    <main class="landing-pg">
    <div className="intro-wrapper">
        <div className="grid-container">
            <div className="max-col intro-text-banner">
                <div class="p-identity">
                    <div className="line-wrap-1">

                        {/* Desktop */}

                        <h1 ref={el => line1 = el} className="text-banner">
                            <span><strong class="highlight-text-dark">X</strong>iang</span>
                            <span className="text-banner-desktop"><strong className="highlight-text-dark">D</strong>aniel</span>
                            <span className="text-banner-desktop"><strong class="highlight-text-dark">S</strong>hi</span>
                        </h1>
                    </div>
                    <div className="line-wrap-2">
                        <p className="line-wrap" ref={el => line2 = el}>Aspiring UX/UI web developer and photographer from Vancouver, BC</p>
                        <p ref={el => line3 = el} >Development in progress - 🚧</p>
                    </div>
                </div>
            </div>
            <div className="max-col media-links">
                <Link class="black-border-btn primary-btn static-btn" to='/bosstep'>Resume</Link>
                <Link class="black-border-btn primary-btn static-btn" to='/bosstep'>Email</Link>
            </div>
        </div>
    </div>

    <section className="about-section">
        <div className="grid-container grid-row-space">
            
            {/* <div className="max-col">
                <h2>I am<strong className="highlight-text">_</strong></h2>
            </div> */}

            {/* <div className="max-col">
                <h2>I am<strong className="highlight-text">_</strong></h2>
            </div>
            <div className="max-col">
                <div className="sub-container">
                    <div className="anchor-80-right">
                        <div className="anchor-80-left rel-margin-bot">
                            <p>A student from the Science and Interactive Arts and Technology department at Simon Fraser University I am pursing a Bachelors of Science with a focus in <strong class="highlight-text">Design</strong>.</p>
                        </div>
                        <div className="anchor-80-left rel-margin-bot">
                            <p>I am currently learning REACT and Framer Motion through online tutorials and in my freetime I <strong class="highlight-text">freelance </strong> photo/video in the Vancouver Dance Community.</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="max-col">
                <h2 className="rel-margin-bot">I am<strong className="highlight-text ">_</strong></h2>
                <div className="anchor-80-right">
                    <p className="rel-margin-bot">A student from the Science and Interactive Arts and Technology department at Simon Fraser University I am pursing a Bachelors of Science with a focus in <strong class="highlight-text">Design</strong>.</p>
                    <p className="rel-margin-bot">I am currently learning REACT and Framer Motion through online tutorials and in my freetime I <strong class="highlight-text">freelance </strong> photo/video in the Vancouver Dance Community.</p>

                </div>
            </div>
        </div>
    </section>
    
    <section className="project project-1">
        <div className="sub-container">
            <div className="color-stripe-container-1">
                <div className="color-stripe-green color-stripe-1"></div>
            </div>
            <div className="max-col row-start-1">
                <div className="grid-container">
                    <div className="color-stripe-container-2">
                        <div className="color-stripe-green color-stripe-2"></div>
                    </div>
                </div>
            </div>
            <div className="max-col row-start-1">
                <div className="grid-container red-tab">
                    <div className="img-contain proj-home-grid-def">
                        <Link to='/bosstep' exact>
                            <img alt="BOSSTEP Project Graphic" src={BOSSTEP}/> 
                        </Link>
                    </div>
                    <div className="project-description">
                        <div className="sub-container">
                            <div className="title-wrapper desktop-project-header">
                                <h2>{projectMessages.bosstep.title}</h2>
                                <p>{projectMessages.bosstep.description}</p>
                            </div>
                            <div className="contribution-wrapper-r rel-margin-bot">
                                <h3>Role:</h3>
                                <p>{projectMessages.bosstep.role}</p>
                            </div>
                            <Link class="black-border-btn primary-btn" to='/bosstep'>View Process</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="project">
        <div className="sub-container">
            <div className="color-stripe-container-1">
                <div className="color-stripe-green color-stripe-1"></div>
            </div>
            <div className="max-col row-start-1">
                <div className="grid-container">
                    <div className="color-stripe-container-2">
                        <div className="color-stripe-green color-stripe-2"></div>
                    </div>
                </div>
            </div>
            <div className="max-col row-start-1">
                <div className="grid-container green-tab">
                    <div className="img-contain proj-home-grid-def">
                        <Link to='/cliq' exact>
                            <img alt="CLIQ Project Graphic" src={CLIQ}/> 
                        </Link>
                    </div>
                    <div className="project-description">
                        <div className="sub-container">
                            <div className="title-wrapper desktop-project-header">
                                <h2>{projectMessages.cliq.title}</h2>
                                <p>{projectMessages.cliq.description}</p>
                            </div>
                            <div className="contribution-wrapper-r rel-margin-bot">
                                <h3>Role:</h3>
                                <p>{projectMessages.cliq.role}</p>
                            </div>
                            <Link class="black-border-btn primary-btn" to='/cliq'>View Process</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
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
            <div className="max-col row-start-1">
                <div className="grid-container blue-tab">
                    <div className="img-contain proj-home-grid-def">
                        <Link to='/track' exact>
                            <img alt="Track Project Graphic" src={TRACK}/> 
                        </Link>
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
                            <Link class="black-border-btn primary-btn" to='/track'>View Process</Link>
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

    <section class="otr-proj-sect">
        <div className="grid-container">
            <div className="max-col">
                <h2>More projects 🥳<strong class="highlight-text">_</strong></h2>
                <div className="sub-container otr-proj-container">
                    <div className="otr-proj-spec-wrapper otr-proj-1">
                        <div className="otr-proj img-contain proj-home-grid-def-maintain-w">
                            <img src={TTA} alt=""/>
                        </div>
                        <h3>Maya Animation - Goku vs Frieza</h3>
                        <p>Janurary 2021 - April 2021</p>
                        {/* <p>Animation project created alongside the team (Jason Xu, Justin Yu and Mutte Chen)</p> */}
                        <p>Role - Rigging, sequencing, editing and sound design.</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-2">
                        <div className="otr-proj-1 otr-proj img-contain proj-home-grid-def-maintain-w">
                            <img src={TRACK} alt=""/>
                        </div>
                        <h3>Moment Track</h3>
                        <p>date</p>
                        <p>Role - Frontend development</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-3">
                        <div className="otr-proj-1 otr-proj img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" href="https://youtu.be/yjXwb3fFqHA">
                                <img src={BOSSTEP} alt=""/>
                            </a>
                        </div>
                        <h3>Team Phantom</h3>
                        <p>Janurary 2021 - April 2021</p>
                        <p>Role - Cinematographer and colorist</p>
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
