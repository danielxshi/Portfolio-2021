import React from 'react';

// Stylesheets
import './style/pages/_projects.scss';

// Bottom banner
import finale from './images/boss-1000x600.webp';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import AnchorEightyModule from "./components/ProjectDetails/AnchorEighty"
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import ThreeColNotes from "./components/ProjectDetails/ThreeColNotes"

// Import images
import sketchMinigameMLrg from './images/bosstep/sketch-minigame-m-lrg.jpg'
import sketchNb from './images/bosstep/sketch-overview-2500x.png'

// Prototype
import protoAddFriend from './images/bosstep/proto-add-friend.png'
import protoHome from './images/bosstep/proto-home.png'
import minigameM from './images/bosstep/proto-minigame-m.png'
import minigameD from './images/bosstep/proto-minigame-d.png'
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

import dummyText from './CommonMessages';

const total = "04";

function Bosstep(props) {
    return (
        <main className="bosstep-page">
        {/* Fifty Module/Sketch Overview*/}
        <ModMaxCol img={sketchNb} citation={"Sketch Overview"} title={"BOSSTEP SKETCH"} p1={"The first iteration of Bosstep consisted of a sketching the home page. Considerations included: A progress tracker for the amount of steps taken and a module to showcase the characters in the users party. Along the way, our group was split into 3 divisons. The divison I belonged to was in charge of research, minigames and friends list."} />
        
        {/* SectHelper1 */}
        <SectionHelperText title={"INITIAL RESEARCH"} sectionChapterCurrent={"01"} sectionChapterTotal={total} text={"Our preliminary researched indicated a decline in physical activity amongst childrens ages A-B and and increase in accessibility of smart devices."}/>

        {/* Eighty Module/Persona */}
        <ModuleFiftyGRight title={"MEET ERICA"} p1={"Erica is 8 years old and enjoys playing video games. She does not feel motivated to go outside and exercise by herself but she enjoys playing games in PE class with her classmates."} img={persona} citation={"Persona"}/>

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={blob} title={"WIREFRAMING"} sectionChapterCurrent={"02"} sectionChapterTotal={total} text={"Our MVP included core features of achievements and a minigame unlocked after a certain amount of steps reached. Friends were added to share progress and incorporate a community to inspire and challenge one another."}/>

        {/* Text animation for color*/}
        <ModMaxContainerGraphic citation={"Wireframe Overview"} img={bosstepOverview}/>

        {/* Fifty Module/Sketch Lrg Overview*/}
        <ModuleFiftyGRight img={sketchMinigameMLrg} citation={"Bossfight Minigame"} title={"MINIGAME REVISION"} p1={"The initial considerations of the minigame did not include physical activity and this did not connect to our core value of encouraging healthy habits."} p2={"Introducing the minigame BossWalk. The user is prompted to take a step in a certain direction. The aim is to keep the radius of movement minimal and the path traveled to be short to be wary of surrounding environments."}/>

        {/* sect helper graphic */}
        <SectionHelperGraphic graphic={personaGraphic} title={"FIELD TESTING"} sectionChapterCurrent={"03"} sectionChapterTotal={total} text={"The research took a halt. BOSSTEP's demographic was difficult to reach because they belong to a vulnerable research group and there would need to be signed consent from their parent/guardian and approval from the University. This process would take time that we did not have."}/>

        {/* Eighty Module/Research Results */}
        <ModuleFiftyGRight 
            title={"RESEARCH PIVOT"} 
            p1={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} 
            img={pie} 
            citation={"citation"}
        />

        <ThreeColNotes 
            img1={i1mMG1} 
            img2={i1MG2} 
            img3={i1FriendList} 
            citation={"citation"} 
            title={"title"} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}
        />

        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={total} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>


        {/* Prototype overview */}
        <section className="bosstep-protoview-section sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="proj-col-contain protoview-1">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img className="rel-margin-bot" src={minigameM} alt=""/>
                            <p className="citation">test</p>
                        </div>
                        <div className="span-3 img-fit">
                            <img className="rel-margin-bot" src={minigameD} alt=""/>
                            <p className="citation">test</p>
                        </div>
                        <div className="gcs-8-5">
                            <h2 className="rel-margin-bot">Designing for<strong className="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">{dummyText}</p>
                        </div>
                    </div>
                </div>
                <div className="proj-col-contain protoview-2">
                    <div className="sub-container grid-col-space">
                        <div className="rel-margin-bot span-5">
                            <p className="paragraph-anchor-left rel-margin-bot">{dummyText}</p>
                        </div>
                        <div className="span-50r-3p1 img-fit">
                            <img className="rel-margin-bot" src={protoHome} alt=""/>
                            <p className="citation">test</p>
                        </div>
                        <div className="span-3 img-fit">
                            <img className="rel-margin-bot" src={protoAddFriend} alt=""/>
                            <p className="citation">test</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Project Conclusion */}
        <ModMaxCol img={finale} title={"title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        {/* Center module */}
        <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* Next project */}
        <NextProject link={"/cliq"} img={nextProj}/>
        </main>
    );
}

export default Bosstep;
