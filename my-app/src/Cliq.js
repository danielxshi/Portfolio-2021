import React from 'react';
import ReactDOM from 'react-dom';


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
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import Slider from "./components/ProjectDetails/Slider"

// Import images
import nextProj from './images/boss-1000x600.webp'
import persona from './images/cliq/persona-isometric.png'
import neuGuide from './images/cliq/neu-guide.png'
import sketchGuide1 from './images/cliq/sketch-build-guide.jpg'
import sketchGuide2 from './images/cliq/sketch-build-guide-2.jpg'
import sketchProdDetail from './images/cliq/sketch-prod-detail.jpg'
import sketchProdList from './images/cliq/sketch-prod-list.jpg'
import wireframeOverview from './images/cliq/wireframe-overview.jpg'
import danielDiscord from './images/cliq/daniel-discord.png'
import marinaDiscord from './images/cliq/marina-discord.png'
import jasonDiscord from './images/cliq/jason-discord.png'
import patternLib from './images/cliq/pattern-lib.png'
import neuGuidePb from './images/cliq/primary-btn-neu-guide.png' 
import neuGuideSb from './images/cliq/secondary-btn-neu-guide.png'
import typography from './images/cliq/typography.jpg'
import kerning from './images/cliq/kerning.jpg' 
import sitemap from './images/cliq/sitemap-lite.png'
import colorguide from './images/cliq/color-guide.png'
import logo from './images/cliq/cliq-logo.png'
import productDetailR2 from './images/cliq/product-detail-r2.png'

// Import gif
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
        <div className="sect-1">
            <ModMaxCol img={persona} title={"title"} citation={"citation"} p1={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!"} p2={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod porro voluptatum enim quos, sit esse ad fugit, magnam commodi repudiandae, ipsum eos consequatur ut perferendis quas in aut exercitationem!"}/>
        </div>


        <FourColumnNotesModule img1={sketchGuide1} img2={sketchGuide2} img3={sketchProdDetail} img4={sketchProdList} citation={"citation"} title={"title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Sect helper graphic */}
        <SectionHelperText title={"Design Phase"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>


        {/* Text animation for typography*/}
        <ModMaxContainerGraphic img={typography}/>

        {/* Kerning */}
        <ModMaxContainerGraphic img={kerning}/>

        {/* color guide */}
        <ModMaxContainerGraphic img={colorguide}/>

        {/* <section>
            <div className="sub-container">
                <h2 className="max-col project-cheer">
                    <span>- CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ - CLIQ </span>
                </h2>
            </div>
        </section> */}
|

        {/* Text animation for LOGO TYPOGRAPHY */}
        <ModuleFiftyGRight img={logo} title={"Type and Color Explained"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        {/* Sect helper graphic */}
        <SectionHelperText title={"Figma GIF"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* Greybox Wireframes */}
        <ModMaxCol img={wireframeOverview} title={"title"} citation={"test"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>

        <ModMaxContainerGraphic img={sitemap} citation={"citation"}/>

        <ModuleFiftyGRight img={productDetailR2} title={"Type and Color Explained"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>


        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={cliqWhiteTextAnim} title={"Figma GIF"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        {/* slider neumorphicPb and Sb*/}
        <section className="sect-last sect-1">
            <div className="grid-container">
                <div className="max-col test-slide">
                    <Slider img1={neuGuidePb} img2={neuGuideSb}/>
                </div>

            </div>
        </section>

        <ModuleFiftyGRight img={neuGuide} title={"Flexibility"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>

        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={cmatrixBG} title={"CMATRIX GIF"} sectionChapterCurrent={"01"} sectionChapterTotal={"05"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        <ModMaxContainerGraphic img={img43} citation={"citation"}/>

        <ModuleFiftyGRight img={img34} title={"Type and Color Explained"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        <ModMaxContainerGraphic img={img43} citation={"citation"}/>

        {/* Pattern Library */}
        <ModMaxCol img={patternLib} title={"Sections I managed"} citation={"test"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>

        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
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
        
        
        {/* Project Conclusion */}
        {/* <ModMaxCol img={imgVid} title={"title"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/> */}
        
        {/* Center module */}
        <CenterMod title={"Working in a team"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* Next project */}
        <NextProject img={nextProj}/>
        </main>
    );
}

export default Cliq;
