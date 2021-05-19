// Router
// import { Link } from "react-router-dom";

// Stylesheets
import './style/pages/_projects.scss';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import FiftyModule from "./components/ProjectDetails/ModuleFiftySplit"
import AnchorEightyModule from "./components/ProjectDetails/AnchorEighty"
import FourColumnNotesModule from "./components/ProjectDetails/FourColumnNotes"
import TwoColNotes from "./components/ProjectDetails/TwoColNotes"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"

// Import images
import nextProj from './images/boss-1000x600.png'
import neuGuideSb from './images/cliq/neumorphic-guide-sb.jpg'
import persona from './images/cliq/persona-isometric.png'
import sketchBuildGuide from './images/cliq/sketch-build-guide.png'
import sketchProductDetail1 from './images/cliq/sketch-product-detail.png'
import sketchProductDetail2 from './images/cliq/sketch-product-detail2.png'

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
// import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';


function Cliq(props) {
    return (
        <main>

        {/* Persona */}
        <ModuleFiftyGRight img={persona} citation={"citation"} title={"Lorem"} p1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={img34} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Sketches */}
        <FourColumnNotesModule img1={img34} img2={img34} img3={img34} img4={img34} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* neumorphic style */}
        <section className="style-sect-1 sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <h2 className="rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                    <div className="sub-container grid-col-space">
                        <div className="span-6 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-4">
                            <div className="img-contain max-col-proj-details rel-margin-bot">
                                <img src={img43} alt=""/>
                            </div>
                            <div className="img-contain">
                                <img src={img43} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Pt1 design idea<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Pt2 challenge caveat<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={img34} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* style guide */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space rel-margin-bot">
                        <div className="span-4 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-4 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-4 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
                    <p>01/05</p>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>
        
        {/* sect helper */}
        <SectionHelperText title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">working in a team <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="center-module ">
                    <div className="profile-img-contain">
                        <div className="img-contain">
                            <img src={imgProf} alt="" />
                        </div>
                        <div className="img-contain">
                            <img src={imgProf} alt="" />
                        </div>
                        <div className="img-contain">
                            <img src={imgProf} alt="" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                </div>
                
            </div>
        </section>
        
        {/* guides design ph */}
        <section className="design-sect-1 sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <div className="img-contain">
                                <img src={imgVid} alt="" />
                            </div>
                        </div>
                        <div className="span-2">
                            <div className="img-contain">
                                <img src={imgVid1x1} alt="" />
                            </div>
                        </div>
                        <div className="span-2">
                            <div className="img-contain">
                                <img src={imgVid1x1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">lorem checkout<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={img34} title={"temp"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <div className="img-contain">
                                <img src={img34} alt="" />
                            </div>
                        </div>
                        <div className="span-50 sub-container">
                            <div className="span-50">
                                <div className="img-contain rel-margin-bot">
                                    <img src={imgVid1x1} alt="" />
                                </div>
                                <div className="img-contain">
                                    <img src={imgVid1x1} alt="" />
                                </div>
                            </div>
                            <div className="span-50">
                                <div className="img-contain rel-margin-bot">
                                    <img src={imgVid1x1} alt="" />
                                </div>
                                <div className="img-contain">
                                    <img src={imgVid1x1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">lorem checkout<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="img-contain">
                        <img src={imgVid} alt="" />
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">lorem checkout<strong class="highlight-text">_</strong></h2>
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

export default Cliq;
