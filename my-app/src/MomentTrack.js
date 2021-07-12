/* //!TODO Add moment logo, add body copy, add mobile image to project in mobile view, flex demo video, add final phone screens
*/


import React from 'react';


// Stylesheets
import './style/pages/_projects.scss';

// Import Messages
import projectMessages from './components/ProjectMessages.js'

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

// Import images
import color from "./images/track/moment-color-palette.png"
import type from "./images/track/type.jpg"
import persona from "./images/track/moment-persona.png"
import notes from "./images/track/moment-notes.png"
import ethnography from "./images/track/moment-ethnography.png"
import protoHome from "./images/track/moment-home-proto.png"
import protoFinance1 from "./images/track/moment-finance-proto.png"
import protoFinance2 from "./images/track/moment-finance-proto-2.png"
import protoFinance3 from "./images/track/moment-finance-proto-3.png"
import journey from "./images/track/moment-journey.png"
import wireframe from "./images/track/moment-wire-flatlay.jpg"
import workshop from "./images/track/moment-workshop.png"
import protoReports1 from "./images/track/moment-reports-proto.png"
import protoReports2 from "./images/track/moment-reports-proto-2.png"
import protoReports3 from "./images/track/moment-reports-proto-3.png"
import designFocus from "./images/track/design-focus-1000x770.png"

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';

// Import images
import nextProj from './images/boss-1000x600.webp'

const dummy = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."

const cite = "Citation"

const title = "Title"

const total = "03"

function MomentTrack(props) {
    return (
        <main>

            <ModuleFiftyGRight
                img={designFocus} 
                title={"Ethnography Study"} 
                p1={"Over project span weekly meetings were held virtually with the General of Operations at Moment Energy, Sumreen Rattan. The first check-point was to conduct an ethnographic study to learn about the company's mission, audience and identify a design focus."}
                p2={"Although the challenges of Covid-19 presented barriers of physical meetings and with Moment Energy's client residing in another province, conducting a user-study in their day-to-day environment would be out-of-scope. Therefore, our methods of data collection were conducted virtually, resulting in virtual meetings with several of Moment Energy's customers."} 
            />


            <SectionHelperText 
                title={"Research Methods"} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={"Affinity Diagram, Interviews, Persona, User Journeys, Participatory Workshop"}
            />
            <ModMaxContainerGraphic citation={"AFFINITY DIAGRAM"} img={notes}/>
            <ModMaxContainerGraphic citation={"PERSONA MODEL"} img={persona}/>
            <ModMaxContainerGraphic citation={"USER JOURNEY"} img={journey}/>

            <section className="mod-50 sect-1 sect-last">
                <div className="grid-row-space grid-container">
                    <div className="proj-col-contain">
                        <div className="sub-container grid-col-space">
                            <div className="span-50">
                                <h3 className="rel-margin-bot">Workshop | Moment Energy</h3>
                                <p className="text-grid-left rel-margin-bot">Connecting the design focus created from the user studies with the customer base and Moment Energy's company values through the workshop. Impact Ranking to identify team perspective of cost/difficulty of implementation and H-Form to generate pros and cons and ending with allowing each team member to select features to implement. We were able to conclude with a refined design focus.</p>
                                <p className="text-grid-left">Create an interactive informational application for direct-to-consumer clients that assures them the product is reliable and sustainable in order to promote lasting relationships.</p>
                            </div>
                            <div className="img-fit gcs-8-5">
                                <img loading="lazy" src={workshop} alt=""/>
                                <p className="citation">PARTICIPATORY WORKSHOP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionHelperText 
                title={"Style Guide"} 
                sectionChapterCurrent={"02"} 
                sectionChapterTotal={total} 
                text={"Typography and color palette"}
            />

            {/* style guide */}
            <ModMaxContainerGraphic img={type}/>

            <ModMaxContainerGraphic img={color}/>

            <SectionHelperText 
                title={"Wireframes"} 
                sectionChapterCurrent={"03"} 
                sectionChapterTotal={total} 
                text={"Screens Wireframed - Battery Monitoring, Settings, Qualitative Impact Analysis and Quantitative Impact Analysis"}
            />

            {/* Wireframes */}
            <ModMaxContainerGraphic citation={"WIREFRAMES"} img={wireframe}/>

            <section className="module-max-col sect-1 sect-last">
                <div className="grid-row-space grid-container">
                    <div className="proj-col-contain img-fit">
                    <h3 className="rel-margin-bot">Moment Track | Video Presentation</h3>
                    <div className="underline-container">
                        <div className="underline rel-margin-bot"></div>
                    </div>
                        <iframe height="1000"  src="https://www.youtube.com/embed/mC4rZiGLeyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="citation">{props.citation}</p>
                    </div>
                    <div className="proj-col-contain">
                        <div className="sub-container grid-col-space">
                            <h3 className="anchor-left-subheader">{props.title}</h3>
                            <div className="anchor-80-right">
                                <p className="rel-margin-bot">{props.p1}</p>
                                <p>{props.p2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionDivider/>

            {/* Center module */}
            <CenterMod href={"https://www.figma.com/file/lVKPTixE6X9AJEHQOGAI6u/MomentTrack_FinalInteractivePrototype?node-id=0%3A1"} org={"SFU IAT339 Project"} btnTitle={"Figma Prototype"} text={"Working with Moment Energy was an honor and their endeavors to make a positive impact on the planet is inspiring. In the future, if the project were to be continued, I would hope to conduct field tests with a prototype and conduct an in-person user study to gain a better understanding of how users interact with Moment's battery systems."}/>

            <SectionDivider/>
            
            <Credits
            ch1={"Professor | Teaching Assistant"}
            cp1={"Mirjana Prpa | Xiao Zhang"}
            ch2={"School"}
            cp2={"Simon Fraser University"}
            cp21={"School of Interactive Arts and Technology"}
            ch3={"Recognition"}
            cp3={"School of Interactive Arts Fall 2020 Project Showcase"}
            cp31={"Simon Fraser University Undergraduate Conference 2021"}
            cp32={"Received 100% for the final project"}
            ch4={"Role"}
            cp4={"Mobile Application"}
            cp41={"UX/UI Design"}
            cp42={"User Research"}
            ch5={"Date"}
            cp5={projectMessages.track.date}
            ch6={"Team"}
            cp6={projectMessages.track.team}
            />

            {/* Next project */}
            <NextProject img={nextProj}/>
        </main>
    );
}

export default MomentTrack;