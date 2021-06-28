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
                        <a class="black-border-btn intro-btn static-btn" to='/bosstep'>Resume</a>
                        <a class="black-border-btn intro-btn static-btn" to='/bosstep'>Email</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    



    <div id="projects" className="grid-container">
        <div className="underline-container divider-col">
            <div className="underline"></div>
            <h2>Projects</h2>
        </div>
    </div>

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
            role={projectMessages.bosstep.role}
            linkTo={'/bosstep'}
            date={projectMessages.bosstep.date}
            description={projectMessages.bosstep.role}
        />
        
        <ProjectCard 
            lrgGraphic={smallCliq} 
            smGraphic={smallCliq} 
            alt={"CLIQ graphic"} 
            title={projectMessages.cliq.title} 
            role={projectMessages.cliq.role} 
            linkTo={'/cliq'}
            role={projectMessages.cliq.role}
            date={projectMessages.cliq.date}
        />
        
        <ProjectCard 
            lrgGraphic={smallTrack} 
            smGraphic={smallTrack} 
            alt={"Moment Track graphic"} 
            title={projectMessages.track.title} 
            role={projectMessages.track.role}
            linkTo={'/track'}
            role={projectMessages.track.role}
            date={projectMessages.track.date}
        />
    </section>

    <div id="photography" className="grid-container">
        <div className="underline-container divider-col">
            <div className="underline"></div>
            <h2>Photography</h2>
        </div>
    </div>

    <section className="photo-grid grid-container project-spacer">
        <div className="max-bleed">
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





    <About id="about"/>


    <section className="project-1 otr-proj-sect">
        <div className="grid-container">
            <div className="max-bleed">
                <h2 className="section-title section-title-space">More projects 🥳</h2>
                <div className="sub-container otr-proj-container">
                    <div className="otr-proj-spec-wrapper otr-proj-1">
                        <div className="otr-proj portfolio-item img-fit proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
                                <img src={TTA} alt="Top Ten Animation Project Graphic"/>
                            </a>
                        </div>
                        <div className="title-wrapper">
                            <h3>
                                <div className="underscore-cta">
                                    <a href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
                                        Maya Animation - Goku vs Frieza
                                    </a>
                                </div>
                            </h3>
                            <p>JAN21|APR21</p>
                        </div>
                        <div className="underline-container otr-divider-col">
                            <div className="underline"></div>
                        </div>
                        <p><strong>Role</strong> - rigging, sequencing, editing and sound design.</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-2">
                        <div className="otr-proj-1 otr-proj portfolio-item img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
                                <img src={MainEvent} alt="The Main Event GIF"/>
                            </a>
                        </div>
                        <div className="title-wrapper">
                            <h3>
                                <div className="underscore-cta">
                                    <a href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
                                        The Main Event
                                    </a>
                                </div>
                            </h3>
                            <p>OCT19</p>
                        </div>
                        <div className="underline-container otr-divider-col">
                            <div className="underline"></div>
                        </div>
                        <p><strong>Role</strong> - videographer</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-3">
                        <div className="otr-proj-1 otr-proj portfolio-item img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/yjXwb3fFqHA">
                                <img src={TeamPhantom} alt="Team Phantom GIF"/>
                            </a>
                        </div>
                        <div className="title-wrapper">
                            <h3>
                                <div className="underscore-cta">
                                    <a href="https://youtu.be/yjXwb3fFqHA">
                                        Team Phantom
                                    </a>
                                </div>
                            </h3>
                            <p>JAN21|APR21</p>
                        </div>

                        <div className="underline-container otr-divider-col">
                            <div className="underline"></div>
                        </div>
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
