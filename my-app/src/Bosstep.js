// Stylesheets
import './style/pages/_projects.scss';

// Bottom banner
import finale from './images/boss-1000x600.png';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";


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
        {/* Sketch overview */}
        <section className="bosstep-sketch-section personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="img-fit span-50">
                            <img className="rel-margin-bot" src={sketchOverview} alt=""/>
                            <p className="citation">test</p>
                        </div>
                        <div className="gcs-8-5">
                            <h2 className="rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* SectHelper1 */}
        <SectionHelperText title={"A/B Testing"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Persona */}
        <section className="bosstep-persona-section sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="span-50">
                    <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                    <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                </div>
                <div className="img-fit gcs-9-4">
                    <img className="rel-margin-bot" src={persona} alt=""/>
                    <p className="citation">test</p>
                </div>
            </div>
        </section>

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

        <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="rel-margin-bot sub-container grid-col-space">
                        <div className="span-50 img-fit">
                            <img src={primaryResearch} alt=""/>
                        </div>
                        <div className="span-50 img-fit">
                            <img src={secondaryResearch} alt=""/>
                        </div>
                    </div>
                    <p className="citation">test</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Wireframe 1 */}
        <section className="bosstep-wireframe-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="rel-margin-bot sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={wireHome} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={wireMiniGame} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={wireRewardList} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={wireRewardDetail} alt=""/>
                        </div>
                    </div>
                    <p className="citation">test</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Wireframe 2 */}
        <section className="bosstep-wireframe-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="rel-margin-bot sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={wireFriendMenu} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={wireFriendList} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={wireFriendDetail} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={wireFriendSecurityPin} alt=""/>
                        </div>
                    </div>
                    <p className="citation">test</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Sketch lrg */}
        <section className="bosstep-minigame-sketch-section sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="img-fit span-50">
                            <img className="rel-margin-bot" src={sketchMinigameMLrg} alt=""/>
                            <p className="citation">test</p>
                        </div>
                        <div className="gcs-8-5">
                            <h2 className="rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper graphic */}
        <SectionHelperGraphic graphic={personaGraphic} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>


        {/* Erma */}
        <section className="field-study-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-fit gcs-9-4">
                            <img className="rel-margin-bot" src={researchLoc} alt=""/>
                            <p className="citation">test</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pie Graph */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-fit gcs-9-4">
                            <img src={pie} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>


        {/* Critique Notes */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="rel-margin-bot sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={critNotes1} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={critNotes2} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={critNotes3} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={critNotes4} alt=""/>
                        </div>
                    </div>
                    <p className="citation">test</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

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
