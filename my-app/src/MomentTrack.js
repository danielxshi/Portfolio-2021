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

const total = "04"

function MomentTrack(props) {
    return (
        <main>

            <ModMaxContainerGraphic img={persona}/>

            <ModMaxCol 
                img={ethnography} 
                citation={cite} 
                title={title} 
                p1={dummy} 
            />

            <SectionHelperText 
                title={"Research Methods"} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={dummy}
            />
            <ModMaxContainerGraphic img={notes}/>
            <ModMaxContainerGraphic img={journey}/>

            {/* Insert Moment Energy Logo */}
            <ModMaxContainerGraphic img={img2x1}/>

            <ModuleFiftyGRight 
                img={workshop} 
                citation={cite} 
                title={title} 
                p1={dummy} 
            />

            <SectionHelperText 
                title={"Style Guide"} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={dummy}
            />

            {/* style guide */}
            <ModMaxContainerGraphic img={type}/>

            <ModMaxContainerGraphic img={color}/>

            <SectionHelperText 
                title={"Wireframes"} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={dummy}
            />

            {/* Wireframes */}
            <ModMaxContainerGraphic img={wireframe}/>

            <section className="module-max-col sect-1 sect-last">
                <div className="grid-row-space grid-container">
                    <div className="proj-col-contain img-fit">
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
            <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={dummy}/>

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