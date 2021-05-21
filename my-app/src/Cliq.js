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
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModuleMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import Slider from "./components/ProjectDetails/Slider"

// Import images
import nextProj from './images/boss-1000x600.png'
import neuGuidePb from './images/cliq/neumorphic-guide-pb.jpg'
import neuGuideSb from './images/cliq/neumorphic-guide-sb.jpg'
import persona from './images/cliq/persona-isometric.png'
import neuGuide from './images/cliq/neu-guide.png'
import sketchGuide1 from './images/cliq/sketch-build-guide.jpg'
import sketchGuide2 from './images/cliq/sketch-build-guide-2.jpg'
import sketchProdDetail from './images/cliq/sketch-prod-detail.jpg'
import sketchProdList from './images/cliq/sketch-prod-list.jpg'
import wireframeOverview from './images/cliq/wireframe-overview.jpg'
import wireframeProdDetailRevised from './images/cliq/wireframe-revised-prod-detail.png'
import danielDiscord from './images/cliq/daniel-discord.png'
import marinaDiscord from './images/cliq/marina-discord.png'
import jasonDiscord from './images/cliq/jason-discord.png'
import prodDetailRevP1 from './images/cliq/prod-detail-revised-p1.jpg'
import prodDetailRevP2 from './images/cliq/prod-detail-revised-p2.jpg'
import prodDetailRevP3 from './images/cliq/prod-detail-revised-p3.jpg'
import wireProdDetailsPt2 from './images/cliq/sample/product-details-wireframe-pt2.png'
import wireProdDetailsPt1 from './images/cliq/sample/product-details-wireframe.png'
import patternLib from './images/cliq/pattern-lib.png'
import primaryBtnGuide from './images/cliq/primary-btn-neu-guide.png' 
import secondaryBtnGuide from './images/cliq/secondary-btn-neu-guide.png' 

// Import gif
import cmatrix from './images/cliq/cmatrix.gif'
import cmatrixBG from './images/cliq/cmatrix-blk-bg.gif'
import cliqWhiteTextAnim from './images/cliq/cliq-white-text-anim.gif'
import cliqBlackTextAnim from './images/cliq/cliq-black-text-anim.gif'

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';


function Cliq(props) {
    return (
        <main>

        {/* Testing slider */}
        <section className="sect-last sect-1">
            <div className="grid-container">
                <div className="max-col test-slide">
                    <Slider img1={neuGuidePb} img2={neuGuideSb}/>
                </div>

            </div>
        </section>

        {/* Persona */}
        {/* Update persona, remove Marina's friend  */}
        {/* Bleed Right */}
        <section className="sect-last sect-1">
            <div className="sub-container">

            <div className="max-col row-start-1">
                <div className="grid-row-space grid-container">
                    <div className="max-col">
                        <h2 className="rel-margin-bot h2-anchor-right">Lorem<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>


            <div className="max-col row-start-2">
                <div className="grid-row-space grid-container">
                    <div className="span-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!</p>
                    </div>
                </div>
            </div>
            <div className="span-bleed-right-container img-fit row-start-2">
                <img src={persona} alt="" />
                <p className="citation">citation</p>
            </div>

            </div>
        </section>


        <FourColumnNotesModule img1={sketchGuide1} img2={sketchGuide2} img3={sketchProdDetail} img4={sketchProdList} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={cliqWhiteTextAnim} title={"Figma GIF"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>


        {/* Text animation for typography*/}
        <ModuleMaxContainerGraphic img={img43}/>

        {/* Text animation for LOGO TYPOGRAPHY */}
        <ModuleFiftyGRight img={imgVid1x1} title={"title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>

        {/* Color choices */}

        <ModuleMaxContainerGraphic img={img43}/>
        {/* Grid */}

        {/* Sketches Full bleed */}
        {/* <section className="sect-1 sect-last">
            <div className="sub-container">
            <div className="max-col row-start-1">
                <div className="grid-row-space grid-container">
                        <div className="span-4">
                            <h2 className="rel-margin-bot h2-anchor-right">Lorem<strong class="highlight-text">_</strong></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!</p>
                        </div>
                </div>
            </div>
            <div className="span-bleed-right-container img-fit row-start-1">
                <img src={wireframeProdDetailRevised} alt="" />
            </div>

            </div>
        </section> */}

        {/* <ModMaxCol img={wireframeOverview} title={"title"} citation={"test"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/> */}


        {/* <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col img-contain">
                    <img className="rel-margin-bot" src={neuGuidePb} alt=""/>
                    <p className="rel-margin-bot citation">Citation</p>
                    <h3>01/03</h3>
                </div>
                <div className="sect-1 max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Pt1 design idea<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="max-col-proj-details">

                <ModuleFiftyGRight img={neuGuide} p1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."} title={"Design Caveat"}/>
                </div>
            </div>
        </section> */}


        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={cliqWhiteTextAnim} title={"Figma GIF"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>


        {/* Greybox Wireframes */}
        <ModMaxCol img={wireframeOverview} title={"title"} citation={"test"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>


        <ModuleMaxContainerGraphic img={img2x1} citation={"citation"}/>

        {/* Sketches Full bleed */}
        <section className="sect-1 sect-last">
            <div className="sub-container">
            <div className="max-col row-start-1">
                <div className="grid-row-space grid-container">
                        <div className="span-5">
                            <h2 className="rel-margin-bot h2-anchor-right">Lorem<strong class="highlight-text">_</strong></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!</p>
                        </div>
                </div>
            </div>
            <div className="span-bleed-right-container img-fit row-start-1">
                <img src={wireframeProdDetailRevised} alt="" />
            </div>

            </div>
        </section>

        <section>
            <div className="sub-container">
                <h2 className="max-col project-cheer">
                    <span>- CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ </span>
                </h2>
            </div>
        </section>

        {/* <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space rel-margin-bot">
                        <div className="span-4 img-contain">
                            <img src={prodDetailRevP1} alt=""/>
                        </div>
                        <div className="span-4 img-contain">
                            <img src={prodDetailRevP2} alt=""/>
                        </div>
                        <div className="span-4 img-contain">
                            <img src={prodDetailRevP3} alt=""/>
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
        </section> */}

        {/* neumorphic style */}
        {/* primarybtn and secondarybtn */}
        <ModuleMaxContainerGraphic img={primaryBtnGuide} citation={"citation"}/>

        {/* Button animation */}
        <ModMaxCol img={imgVid} title={"title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>

        {/* <section className="sect-last sect-1">
            <div className="sub-container">

            <div className="max-col row-start-1">
                <div className="grid-row-space grid-container">
                    <div className="max-col">
                        <h2 className="rel-margin-bot h2-anchor-right">Lorem<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>


            <div className="max-col row-start-2">
                <div className="grid-row-space grid-container">
                    <div className="span-6">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!</p>
                    </div>
                </div>
            </div>
            <div className="span-bleed-right-container-hr img-fit row-start-2">
                <img src={primaryBtnGuide} alt="" />
                <p className="citation">citation</p>
            </div>

            </div>
        </section> */}

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={cmatrixBG} title={"CMATRIX GIF"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        

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
                            <img src={danielDiscord} alt="" />
                        </div>
                        <div className="img-contain">
                            <img src={jasonDiscord} alt="" />
                        </div>
                        <div className="img-contain">
                            <img src={marinaDiscord} alt="" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                </div>
                
            </div>
        </section>




        {/* Backup to components */}

        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <div className="img-contain">
                                <img src={patternLib} alt="" />
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
        
        {/* guides design ph */}
        <section className="design-sect-1 sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <div className="img-contain">
                                <img src={imgVid1x1} alt="" />
                            </div>
                        </div>
                        <div className="span-6">
                            <div className="img-contain">
                                <img src={cliqWhiteTextAnim} alt="" />
                            </div>
                        </div>
                        <div className="span-6">
                            <div className="img-contain">
                                <img src={cliqBlackTextAnim} alt="" />
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

        {/* Pattern Library */}
        <ModMaxCol img={patternLib} title={"Sections I managed"} citation={"test"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        {/* Project Conclusion */}
        <ModMaxCol img={imgVid} title={"title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        {/* Center module */}
        <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* Next project */}
        <NextProject img={nextProj}/>


        </main>
    );
}

export default Cliq;
