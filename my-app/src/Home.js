import './style/App.scss';
import './style/grid.scss';
import BOSSTEP from './images/boss-1000x600.png';
import CLIQ from './images/cliq-1000x600.png';
import TRACK from './images/track-1000x600.png';
import projectMessages from './components/ProjectMessages.js'

import { gsap } from "gsap";

import { Link } from "react-router-dom";
import React, { useEffect, useRef} from 'react';


const Home = () => {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
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
                <div className="col-10 intro-text-banner">
                    <div class="p-identity">
                        <div className="line-wrap-1">
                            <h1 ref={el => line1 = el}><strong class="highlight-text-dark">X</strong>iang<strong class="highlight-text-dark">D</strong>aniel<strong class="highlight-text-dark">S</strong>hi</h1>
                        </div>
                        <div className="line-wrap-2">
                            <p className="line-wrap" ref={el => line2 = el}>Aspiring UX/UI web developer and photographer from Vancouver, BC</p>
                        </div>
                    </div>
                </div>
                <div className="media-links">
                    <Link class="black-border-btn primary-btn static-btn" to='/bosstep'>Resume</Link>
                    <Link class="black-border-btn primary-btn static-btn" to='/bosstep'>Email</Link>
                </div>
            </div>
        </div>
    
        <section className="about-section">
            <div className="grid-container">
                <div className="about-row-1-col-1">
                    <h2 className="subheading">I am <strong className="highlight-text">_</strong></h2>
                </div>
                <div className="about-row-1-col-2">
                    <p>Currently a student from the Science and Interactive Arts and Technology department at Simon Fraser University</p>
                </div>
                <div className="about-row-1-col-3">
                    <p>I first started web development in 2016 at RED Academy and I am currently purusing a Bachelors of Science with a focus in Design </p>
                </div>
                <div className="about-row-col"></div>
                <div className="about-row-2-col-2">
                    <p>My goal is to find a career in building interactive web applications</p>
                </div>
            </div>
        </section>
        
        <section className="project project-1">
            <div className="sub-container">
                <div className="color-stripe-container-1">
                    <div className="color-stripe color-stripe-1"></div>
                </div>
                <div className="max-col grid-container">
                    <div className="test-img-contain">
                        <img alt="BOSSTEP Project Graphic" src={BOSSTEP}/> 
                    </div>
                    <div className="project-description test-desc">
                        <div className="sub-container">
                            <div className="title-wrapper desktop-project-header">
                                <h2>{projectMessages.bosstep.title}</h2>
                                <p>{projectMessages.bosstep.description}</p>
                            </div>
                            <div className="contribution-wrapper-r">
                                <h3>Role:</h3>
                                <p>{projectMessages.bosstep.role}</p>
                            </div>
                            <Link class="black-border-btn primary-btn" to='/bosstep'>View Process</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <section className="project">
            <div className="sub-container">
                <div className="color-stripe-container-1">
                    <div className="color-stripe color-stripe-1"></div>
                </div>
                <div className="color-stripe-container-2">
                    <div className="color-stripe color-stripe-1"></div>
                </div>
                <div className="max-col grid-container">
                    <div className="col-10 glass-border-padding">
                        <div className="project-size-contain">
                            <div className="project-img-wrapper">
                                <Link to='/bosstep'>
                                    <img alt="BOSSTEP Project Graphic" src={BOSSTEP}/>                            
                                </Link>
                            </div>
                            <div className="project-description">
                                <div className="sub-container">
                                    <div className="title-wrapper desktop-project-header">
                                        <h2>{projectMessages.bosstep.title}</h2>
                                        <p>{projectMessages.bosstep.description}</p>
                                    </div>
                                    <div className="contribution-wrapper-r">
                                        <h3>Role:</h3>
                                        <p>{projectMessages.bosstep.role}</p>
                                    </div>
                                    <Link class="black-border-btn primary-btn" to='/bosstep'>View Process</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <section className="project">
            <div className="grid-container">
                <div className="col-10">
                    <div className="project-size-contain">
                        <div className="project-img-wrapper">
                            <Link to='/bosstep'>
                                <img alt="BOSSTEP Project Graphic" src={CLIQ}/>                            
                            </Link>
                        </div>
                        <div className="project-description">
                            <div className="sub-container">
                                <div className="title-wrapper desktop-project-header">
                                    <h2>{projectMessages.cliq.title}</h2>
                                    <p>{projectMessages.cliq.description}</p>
                                </div>
                                <div className="contribution-wrapper-r">
                                    <h3>Role:</h3>
                                    <p>{projectMessages.cliq.role}</p>
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
                    <div className="color-stripe color-stripe-1"></div>
                </div>
                <div className="color-stripe-container-2">
                    <div className="color-stripe color-stripe-1"></div>
                </div>
                <div className="max-col grid-container">
                    <div className="col-10">
                        <div className="project-size-contain">
                            <div className="project-img-wrapper">
                                <Link to='/bosstep'>
                                    <img alt="TRACK Project Graphic" src={TRACK}/>                            
                                </Link>
                            </div>
                            <div className="project-description">
                                <div className="sub-container">
                                    <div className="title-wrapper desktop-project-header">
                                        <h2>{projectMessages.track.title}</h2>
                                        <p>{projectMessages.track.description}</p>
                                    </div>
                                    <div className="contribution-wrapper-r">
                                        <h3>Role:</h3>
                                        <p>{projectMessages.track.role}</p>
                                    </div>
                                    <Link class="black-border-btn primary-btn" to='/bosstep'>View Process</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        
      </main>
  );
}

export default Home;
