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


// Import Messages
import projectMessages from './components/ProjectMessages.js'

// Import images
import sketchMinigameMLrg from './images/bosstep/sketch-minigame-m-lrg.jpg'
import sketchNb from './images/bosstep/sketch-overview-2500x.png'

// Prototype
import i1mMG1 from './images/bosstep/i1-friend-list.webp'
import i1MG2 from './images/bosstep/i1-mg1.webp'
import i1FriendList from './images/bosstep/i1-mg2.webp'

// Wireframe
import bosstepOverview from './images/bosstep/wireframe-overview.webp'
// Persona
import persona from './images/bosstep/persona-bstep.webp'

// Graphics
import pie from './images/bosstep/pie-graph-graphic.png'
import blob from './images/bosstep/blob-neu.png'
import personaGraphic from './images/bosstep/persona-graphic.png'

// Next project
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

        <SectionHelperText 
            title={"DESIGN"} 
            sectionChapterCurrent={"01"} 
            sectionChapterTotal={total} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}
        />

        <ModMaxContainerGraphic 
            citation={"WIREFRAME"} 
            img={bosstepOverview}
        />

        <SectionHelperGraphic 
            graphic={personaGraphic} 
            title={"User Research"} 
            sectionChapterCurrent={"02"} 
            sectionChapterTotal={total} 
            text={"The research took a halt. BOSSTEP's demographic was difficult to reach because they belong to a vulnerable research group and there would need to be signed consent from their parent/guardian and approval from the University. This process would take time that we did not have."}
        />

        <ThreeColNotes 
            img1={i1mMG1} 
            img2={i1MG2} 
            img3={i1FriendList} 
            citation={"PROTOTYPE"} 
            title={"title"} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}
        />

        <ModuleFiftyGRight 
            title={"Field Testing"} 
            p1={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} 
            img={pie} 
            citation={"FIELD TEST"}
        />

        <ModMaxContainerGraphic 
            citation={"FIELD TEST"} 
            img={img2x1}
        />

        <section className="sect-last sect-1 two-column-graphic">
            <div className="grid-container">
                <div className="max-bleed">
                    <div className="title-group">
                        <div className="title-wrapper">
                            <h4>Before</h4>
                        </div>
                        <div className="title-wrapper">
                            <h4>After</h4>
                        </div>
                    </div>
                    {/* Group 1 */}
                    <div className="content-group-wrapper rel-margin-bot">
                        <div className="cg-sect-1">
                            <div className="content-group">
                                <img src={imgProf} alt="" />
                                <p className="citation">Text</p>
                            </div>
                        </div>
                        <div className="directional-icon">
                            <p>>>></p>
                        </div>
                        <div className="cg-sect-2">
                            <div className="content-group">
                                <img src={imgProf} alt="" />
                                <p className="citation">Text</p>
                            </div>
                        </div>
                    </div>
                    {/* Group 2 */}
                    <div className="content-group-wrapper rel-margin-bot">
                        <div className="cg-sect-1">
                            <div className="content-group">
                                <img src={imgProf} alt="" />
                                <p className="citation">Text</p>
                            </div>
                        </div>
                        <div className="directional-icon">
                            <p>>>></p>
                        </div>
                        <div className="cg-sect-2">
                            <div className="content-group">
                                <img src={imgProf} alt="" />
                                <p className="citation">Text</p>
                            </div>
                        </div>
                    </div>
                    {/* Group 3 */}
                    <div className="content-group-wrapper">
                        <div className="cg-sect-1">
                            <div className="content-group">
                                <img src={imgProf} alt="" />
                                <p className="citation">Text</p>
                            </div>
                        </div>
                        <div className="directional-icon">
                            <p>>>></p>
                        </div>
                        <div className="cg-sect-2">
                            <div className="content-group">
                                <img src={imgProf} alt="" />
                                <p className="citation">Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ModuleFiftyGRight 
            title={"Design Critique"} 
            p1={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} 
            img={imgProf} 
            citation={"CRITIQUE"}
        />

        <SectionHelperGraphic 
            graphic={blob} 
            title={"DESIGN CHANGES"} 
            sectionChapterCurrent={"03"} 
            sectionChapterTotal={total} 
            text={"Our MVP included core features of achievements and a minigame unlocked after a certain amount of steps reached. Friends were added to share progress and incorporate a community to inspire and challenge one another."}
        />

        <ModMaxContainerGraphic 
            citation={"WIREFRAME"} 
            img={img2x1}
        />

        <SectionDivider/>

        <CenterMod 
            btnTitle={"View Website"} 
            text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}
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
