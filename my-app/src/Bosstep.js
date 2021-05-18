// Stylesheets
import './style/pages/_projects.scss';

// Bottom banner
import finale from './images/boss-1000x600.png';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import FiftyModule from "./components/ProjectDetails/ModuleFiftySplit"
import AnchorEightyModule from "./components/ProjectDetails/AnchorEighty"
import FourColumnNotesModule from "./components/ProjectDetails/FourColumnNotes"
import TwoColNotes from "./components/ProjectDetails/TwoColNotes"


// Import images

// Critique
import critNotes1 from './images/bosstep/crit-notes-1.jpg';
import critNotes2 from './images/bosstep/crit-notes-2.jpg';
import critNotes3 from './images/bosstep/crit-notes-3.jpg';
import critNotes4 from './images/bosstep/crit-notes-4.jpg';

// Sketches
// lrg sketch
import sketchMinigameMLrg from './images/bosstep/sketch-minigame-m-lrg.jpg'
// sketch overview
import sketchOverview from './images/bosstep/sketch-overview-bosstep.jpg'

// Prototype
import protoAddFriend from './images/bosstep/proto-add-friend.png'
import protoHome from './images/bosstep/proto-home.png'
import minigameM from './images/bosstep/proto-minigame-m.png'
import minigameD from './images/bosstep/proto-minigame-d.png'

// Wireframe
// wireframe pt 1
import wireHome from './images/bosstep/wire-home-bstep.jpg'
import wireMiniGame from './images/bosstep/wire-minigame-bstep.jpg'
import wireRewardDetail from './images/bosstep/wire-reward-bstep.jpg'
import wireRewardList from './images/bosstep/wire-weekly-reward-bstep.jpg'
// wireframe pt 2
import wireFriendDetail from './images/bosstep/wire-friend-detail.jpg'
import wireFriendList from './images/bosstep/wire-friend-list.jpg'
import wireFriendMenu from './images/bosstep/wire-friend-menu.jpg'
import wireFriendSecurityPin from './images/bosstep/wire-friend-pin.jpg'


// Research
import primaryResearch from './images/bosstep/primary-research-bstep.jpg'
import secondaryResearch from './images/bosstep/secondary-research-bstep.jpg'
import researchLoc from './images/bosstep/research-loc.jpg'

// Persona
import persona from './images/bosstep/persona-bstep.jpg'

// Graphics
import pie from './images/bosstep/pie-graph-graphic.png'
import blob from './images/bosstep/blob-neu.png'
import personaGraphic from './images/bosstep/persona-graphic.png'

// Next project
import nextProj from './images/cliq-1000x600.png'

function Bosstep(props) {
    return (
        <main className="bosstep-page">
        {/* Fifty Module/Sketch Overview*/}
        <FiftyModule img={sketchOverview} citation={"Sketch Overview"} title={"lorem"} p1={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>
        
        {/* SectHelper1 */}
        <SectionHelperText title={"A/B Testing"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Eighty Module/Persona */}
        <AnchorEightyModule title={"Title"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} img={persona} citation={"citation"}/>

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
                            <h2 className="rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                    </div>
                </div>
                <div className="max-col protoview-2">
                    <div className="sub-container grid-col-space">
                        <div className="rel-margin-bot span-5">
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
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
        <SectionHelperGraphic graphic={blob} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Primary and Secondary Research */}
        <TwoColNotes img1={primaryResearch} img2={secondaryResearch} citation={"citation"} title={"Lorem"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Wireframe 1 */}
        <FourColumnNotesModule img1={wireHome} img2={wireMiniGame} img3={wireRewardList} img4={wireRewardDetail} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Wireframe 2 */}
        <FourColumnNotesModule img1={wireFriendMenu} img2={wireFriendList} img3={wireFriendDetail} img4={wireFriendSecurityPin} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Fifty Module/Sketch Lrg Overview*/}
        <FiftyModule img={sketchMinigameMLrg} citation={"Sketch Overview"} title={"lorem"} p1={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>


        {/* sect helper graphic */}
        <SectionHelperGraphic graphic={personaGraphic} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Eighty Module/Field Study */}
        {/* <AnchorEightyModule title={"Title"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} img={researchLoc} citation={"citation"}/> */}


        {/* Eighty Module/Research Results */}
        <AnchorEightyModule title={"Title"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} p2={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} img={pie} citation={"citation"}/>

        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        <FourColumnNotesModule img1={critNotes1} img2={critNotes2} img3={critNotes3} img4={critNotes4} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Project Conclusion */}
        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col img-fit">
                    <img src={finale} alt="" />
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="anchor-left-subheader">Lorem<strong className="highlight-text">_</strong></h2>
                        <div className="anchor-80-right">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Center module */}
        <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* Next project */}
        <NextProject img={nextProj}/>
        </main>
    );
}

export default Bosstep;
