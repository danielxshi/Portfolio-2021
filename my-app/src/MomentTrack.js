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
import wireframe from "./images/track/moment-wireframe.png"
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


            <ModuleFiftyGRight 
                img={img34} 
                citation={cite} 
                title={title} 
                p1={dummy} 
            />

            <SectionHelperText 
                title={title} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={dummy}
            />

            <ModMaxContainerGraphic img={img2x1}/>

            <ModMaxContainerGraphic img={img2x1}/>

            <SectionHelperText 
                title={title} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={dummy}
            />

            <ModuleFiftyGRight 
                img={img34} 
                citation={cite} 
                title={title} 
                p1={dummy} 
            />

            {/* style guide */}
            <ModMaxContainerGraphic img={img2x1}/>

            <ModMaxContainerGraphic img={img2x1}/>

            <SectionHelperText 
                title={title} 
                sectionChapterCurrent={"01"} 
                sectionChapterTotal={total} 
                text={dummy}
            />

            {/* Wireframes */}
            <ModMaxContainerGraphic img={img2x1}/>

            <ModMaxCol 
                img={img2x1} 
                citation={cite} 
                title={title} 
                p1={dummy} 
            />
            
            <SectionDivider/>

            {/* Center module */}
            <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={dummy}/>

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

            {/* Next project */}
            <NextProject img={nextProj}/>
        </main>
    );
}

export default MomentTrack;