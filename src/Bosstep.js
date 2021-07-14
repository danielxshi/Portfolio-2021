import React from 'react';

// Stylesheets
import './style/pages/_projects.scss';

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText"
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic"
import CenterMod from "./components/ProjectDetails/CenterModule"
import NextProject from "./components/ProjectDetails/NextProj"
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import ThreeColNotes from "./components/ProjectDetails/ThreeColNotes"
import SectionDivider from "./components/SectionDivider"
import Credits from "./components/ProjectDetails/Credits"
import Slider from "./components/ProjectDetails/Slider"
import ModuleThirtyGRight from './components/ProjectDetails/Module30GRight'

// Import Messages
import projectMessages from './components/ProjectMessages.js'

// Import images
import sketchMinigameMLrg from './images/bosstep/sketch-minigame-m-lrg.jpg'
import sketchNb from './images/bosstep/sketch-overview-2500x.png'
import i1mMG1 from './images/bosstep/i1-friend-list.webp'
import i1MG2 from './images/bosstep/i1-mg1.webp'
import i1FriendList from './images/bosstep/i1-mg2.webp'
import bosstepOverview from './images/bosstep/wireframe-overview.webp'
import persona from './images/bosstep/persona-bstep.webp'
import pie from './images/bosstep/pie-graph-graphic.png'
import blob from './images/bosstep/blob-neu.png'
import personaGraphic from './images/bosstep/persona-graphic.png'
import minigameBefore from './images/bosstep/bstep-mg1-b.jpg'
import minigameAfter from './images/bosstep/bstep-mg1-a.jpg'
import minigame2Before from './images/bosstep/bstep-mg2-b.jpg'
import minigame2After from './images/bosstep/bstep-mg2-a.jpg'
import homeB from './images/bosstep/bstep-h-b.jpg'
import homeA from './images/bosstep/bstep-h-a.jpg'
import fieldtestMCU from './images/bosstep/field-test-mcu.jpg'
import nextProj from './images/cliq-1000x600.webp'

const total = "03";

function Bosstep(props) {
    return (
        <main className="bosstep-page">
        <ModuleFiftyGRight 
            title={"The Persona"} 
            p1={"Erica is 8 years old and enjoys playing video games. She does not feel motivated to go outside and exercise by herself but she enjoys playing games in PE class with her classmates."} 
            img={persona} 
            citation={"PERSONA"}
        />

        <SectionHelperText 
            title={"Sketches"} 
            sectionChapterCurrent={"01"} 
            sectionChapterTotal={total} 
            text={"Our MVP included core features of achievements and a minigame unlocked after a certain amount of steps reached. Friends were added to share progress and incorporate a community to inspire and challenge one another."}
        />

        <ModMaxCol 
            img={sketchNb} 
            citation={"SKETCHES"} 
            title={"Sketches"} 
            p1={"The first iteration of Bosstep consisted of a sketching the home page. Considerations included: A progress tracker for the amount of steps taken and a module to showcase the characters in the users party. Along the way, our group was split into 3 divisons. The divison I belonged to was in charge of research, minigames and friends list."} 
        />

        <ModuleFiftyGRight 
            img={sketchMinigameMLrg} 
            citation={"Bossfight Minigame"} 
            title={"MINIGAME REVISION"} 
            p1={"The initial considerations of the minigame did not include physical activity and this did not connect to our core value of encouraging healthy habits."} 
            p2={"Introducing the minigame BossWalk. The user is prompted to take a step in a certain direction. The aim is to keep the radius of movement minimal and the path traveled to be short to be wary of surrounding environments."}
        />


        <SectionHelperGraphic 
            graphic={blob} 
            title={"DESIGN CHANGES"} 
            sectionChapterCurrent={"01"} 
            sectionChapterTotal={total} 
            text={"Our MVP included core features of achievements and a minigame unlocked after a certain amount of steps reached. Friends were added to share progress and incorporate a community to inspire and challenge one another."}
        />

        <ModMaxContainerGraphic 
            citation={"WIREFRAME"} 
            img={bosstepOverview}
        />

        <SectionHelperGraphic 
            graphic={personaGraphic} 
            title={"Field Test"} 
            sectionChapterCurrent={"03"} 
            sectionChapterTotal={total} 
            text={"Think aloud test with 11 participants"}
        />
        
        <ModuleThirtyGRight 
            title={"Field Testing"} 
            p1={"The test implemented was a think-aloud test and it was conducted with 11 users 10 parents and 1 athlete. Each user were instructed solely based off of screen print-outs of the application screens."}
            p2={"Although these users were not our end users the information we gathered was taken in as considerations of how users may interpret the application. Our end users were not in reach as they belonged to a vulnerable group due to their age. Therefore, limitations from University, requiring waivers would prompt a time-sacrifice the project time-line did not have."} 
            img={fieldtestMCU} 
            citation={"FIELD TEST"}
        />

        <section className="sect-last sect-1 two-column-graphic">
            <div className="grid-container">
                <div className="max-bleed">
                    {/* <div className="sub-container">
                        <div className="title-wrapper title-1">
                            <h4>Before</h4>
                        </div>
                        <div className="title-wrapper title-2">
                            <h4>After</h4>
                        </div>
                    </div> */}
                    {/* Group 1 */}
                    <div className="sub-container">
                        <div className="title-wrapper title-1">
                            <h4>Before</h4>
                        </div>
                        <div className="title-wrapper title-2">
                            <h4>After</h4>
                        </div>
                        <div className="content-container">
                            <div className="content-group-wrapper rel-margin-bot">
                                <div className="cg-sect-1">
                                    <div className="content-group">
                                        <img src={minigameBefore} alt="BOSSTEP Minigame" />
                                        <p className="citation">Boss Tag (Before)</p>
                                    </div>
                                </div>
                                <div className="directional-icon">
                                    <p>>>></p>
                                </div>
                                <div className="cg-sect-2">
                                    <div className="content-group">
                                        <img src={minigameAfter} alt="BOSSTEP Minigame" />
                                        <p className="citation">Boss Tag (After)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="note-wrapper">
                            <div className="title-wrapper">
                                <h4>Minigame - Boss Tag</h4>
                            </div>

                            <div className="rel-margin-bot underline-container">
                                <div className="underline"></div>
                            </div>
                            <div className="notes-sect-1 rel-margin-bot">
                                <h4>Findings</h4>
                                <ul>
                                    <li>1) <strong>4/11</strong> participants perceived the number count as the timer for 1 step only</li>
                                </ul>
                            </div>
                            <div className="notes-sect-2">
                                <h4>Changes</h4>
                                <p>Changed the element to differentiate the color from the arrow to avoid confusion</p>
                            </div>
                        </div>
                    </div>
                    {/* Group 2 */}
                    <div className="sub-container">
                        <div className="content-container">
                            <div className="content-group-wrapper rel-margin-bot">
                                <div className="cg-sect-1">
                                    <div className="content-group">
                                        <img src={minigame2Before} alt="" />
                                        <p className="citation">Planet Dodger (Before)</p>
                                    </div>
                                </div>
                                <div className="directional-icon">
                                    <p>>>></p>
                                </div>
                                <div className="cg-sect-2">
                                    <div className="content-group">
                                        <img src={minigame2After} alt="" />
                                        <p className="citation">Planet Dodger (After)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="note-wrapper">
                            <div className="title-wrapper">
                                <h4>Minigame - Planet Dodger</h4>
                            </div>

                            <div className="rel-margin-bot underline-container">
                                <div className="underline"></div>
                            </div>
                            <div className="notes-sect-1 rel-margin-bot">
                                <h4>Findings</h4>
                                <ul>
                                    <li>1) <strong>7/11</strong> participants presumed the objective was to hit the projectiles</li>
                                </ul>
                            </div>
                            <div className="notes-sect-2">
                                <h4>Changes</h4>
                                <p>The design is similar to games like Tap Tap Revenge. People who are familiar with these games tend to hit the obstacle as opposed to avoid it. Therefore a more visual based tutorial was implemented to be more informative.</p>
                            </div>
                        </div>
                    </div>
                    {/* Group 3 */}
                    <div className="sub-container">
                        <div className="content-container">
                            <div className="content-group-wrapper">
                                <div className="cg-sect-1">
                                    <div className="content-group">
                                        <img src={homeB} alt="" />
                                        <p className="citation">Home Screen (Before)</p>
                                    </div>
                                </div>
                                <div className="directional-icon">
                                    <p>>>></p>
                                </div>
                                <div className="cg-sect-2">
                                    <div className="content-group">
                                        <img src={homeA} alt="" />
                                        <p className="citation">Home Screen (After)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="note-wrapper">
                            <div className="title-wrapper">
                                <h4>Home Screen</h4>
                            </div>

                            <div className="rel-margin-bot underline-container">
                                <div className="underline"></div>
                            </div>
                            <div className="notes-sect-1 rel-margin-bot">
                                <h4>Findings</h4>
                                <ul>
                                    <li>1) Participants did not understand the step counter</li>
                                    <li>2) Participants believed it was for buddies experience points</li>
                                </ul>
                            </div>
                            <div className="notes-sect-2">
                                <h4>Changes</h4>
                                <p>To make the step counter easier to identify we changed the buddy face to a shoe to make it more intuitive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider/>

        <CenterMod 
            btnTitle={"View Website"} 
            text={"The project taught me to ultimately place safety at the forefront. In addition to working with a younger audience for our end user the implmentation of physical exercise and the potential harm it can create based on interactions shifting focus towards the screen and off of their surroundings. If this project moves forward, I hope to create a safe and responsible research plan and bring in our target audience to conduct a play-test."}
        />

        <SectionDivider/>
            
        <Credits
            ch1={"Professor | Teaching Assistant"}
            cp1={"Paul Brokenshire | Halimat Alabi"}
            ch2={"School"}
            cp2={"Simon Fraser University"}
            cp21={"School of Interactive Arts and Technology"}
            ch3={"Recognition"}
            cp3={"First game application to be approved in the history of Interface Design class (IAT334)"}
            ch4={"Role"}
            cp4={"User Research"}
            cp41={"UX/UI Design"}
            cp42={"Website Development"}
            ch5={"Date"}
            cp5={projectMessages.bosstep.date}
            ch6={"Team"}
            cp6={projectMessages.bosstep.team}
        />

        <NextProject link={"/cliq"} img={nextProj}/>
        </main>
    );
}

export default Bosstep;
