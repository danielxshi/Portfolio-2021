import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets
import './style/pages/_projects.scss';

// Bottom banner
import finale from './images/boss-1000x600.webp';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import FiftyModule from "./components/ProjectDetails/ModuleFiftySplit"
import AnchorEightyModule from "./components/ProjectDetails/AnchorEighty"
import FourColumnNotesModule from "./components/ProjectDetails/FourColumnNotes"
import TwoColNotes from "./components/ProjectDetails/TwoColNotes"
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import Slider from "./components/ProjectDetails/Slider"
import ThreeColNotes from "./components/ProjectDetails/ThreeColNotes"

// Import images

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';

// Sketches
// lrg sketch
import sketchMinigameMLrg from './images/bosstep/sketch-minigame-m-lrg.jpg'
// sketch overview
import sketchNb from './images/bosstep/sketch-overview-2500x.png'
import sketchOverview from './images/bosstep/sketch-overview-bosstep.webp'

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
// wireframe pt 1
import wireHome from './images/bosstep/wire-home-bstep.webp'
import wireMiniGame from './images/bosstep/wire-minigame-bstep.webp'
import wireRewardDetail from './images/bosstep/wire-reward-bstep.webp'
import wireRewardList from './images/bosstep/wire-weekly-reward-bstep.webp'
// wireframe pt 2
import wireFriendDetail from './images/bosstep/wire-friend-detail.webp'
import wireFriendList from './images/bosstep/wire-friend-list.webp'
import wireFriendMenu from './images/bosstep/wire-friend-menu.webp'
import wireFriendSecurityPin from './images/bosstep/wire-friend-pin.webp'


// Research
import researchLoc from './images/bosstep/research-loc.jpg'

// Persona
import persona from './images/bosstep/persona-bstep.webp'

// Graphics
import pie from './images/bosstep/pie-graph-graphic.png'
import blob from './images/bosstep/blob-neu.png'
import personaGraphic from './images/bosstep/persona-graphic.png'

// Next project
import nextProj from './images/cliq-1000x600.webp'
import projectMessages from './components/ProjectMessages';

import dummyText from './CommonMessages';
import * as bosstepMessages from './BosstepMessages';

function Bosstep(props) {
    return (
        <main className="bosstep-page">
        {/* Fifty Module/Sketch Overview*/}
        <ModMaxCol img={sketchNb} citation={"Sketch Overview"} title={"BOSSTEP OVERVIEW"} p1={"BOSSTEP was a 6 week project designed for the childrens health sector. The project involved researching the demographic through interviews and A/B testining. The final interface design was a mobile application catered towards motivating physical activity with gamified step tracking, goals and minigames."} />
        
        {/* SectHelper1 */}
        <SectionHelperText title={"Start"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"After the initial design phase we encountered a research hurdle. I was in charge of spearheading the user testing for our initial designed of minigames and overall interface navigation. We were not able to gather participants within our target demographic from ages 6-13 due to the vulnerability of the demographic from their young age and the requirements of consent forms approved by the University."}/>

        {/* Eighty Module/Persona */}
        <AnchorEightyModule title={"Persona"} text={dummyText} img={persona} citation={"citation"}/>

        {/* Prototype overview */}
        <section className="bosstep-protoview-section sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col protoview-1">
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
                <div className="max-col protoview-2">
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

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={blob} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={dummyText}/>

        {/* Text animation for color*/}
        <ModMaxContainerGraphic citation={"Wireframe Overview"} img={bosstepOverview}/>

        {/* Primary and Secondary Research */}
        {/* <TwoColNotes img1={primaryResearch} img2={secondaryResearch} citation={"citation"} title={"Lorem"} text={"insert quote and one sentence about what research"}/> */}

        {/* Fifty Module/Sketch Lrg Overview*/}
        <ModuleFiftyGRight img={sketchMinigameMLrg} citation={"Sketch Overview"} title={"lorem"} p1={dummyText} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* sect helper graphic */}
        <SectionHelperGraphic graphic={personaGraphic} title={"A/B Testing"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        <ThreeColNotes img1={i1mMG1} img2={i1MG2} img3={i1FriendList} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* slider neumorphicPb and Sb*/}
        <section className="sect-last sect-1">
            <div className="grid-container">
                <div className="max-col test-slide">
                    <Slider img1={img43} img2={img43}/>
                </div>

            </div>
        </section>

        {/* Eighty Module/Research Results */}
        <AnchorEightyModule title={"Title"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} img={pie} citation={"citation"}/>

        {/* <FourColumnNotesModule img1={critNotes1} img2={critNotes2} img3={critNotes3} img4={critNotes4} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/> */}

        {/* Fifty Module/Sketch Lrg Overview*/}
        {/* <ModuleFiftyGRight img={img34} citation={"Sketch Overview"} title={"Field test summary"} p1={dummyText} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/> */}

        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Project Conclusion */}
        <ModMaxCol img={finale} title={"title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        {/* Center module */}
        <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* Next project */}
        <NextProject img={nextProj}/>
        </main>
    );
}

export default Bosstep;
