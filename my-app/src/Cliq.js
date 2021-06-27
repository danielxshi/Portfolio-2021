import React from 'react';


// Stylesheets
import './style/pages/_projects.scss';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import FourColumnNotesModule from "./components/ProjectDetails/FourColumnNotes"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import Slider from "./components/ProjectDetails/Slider"

// Import images
import nextProj from './images/boss-1000x600.webp'
import persona from './images/cliq/persona-isometric.png'
import sketchGuide1 from './images/cliq/sketch-build-guide.webp'
import sketchGuide2 from './images/cliq/sketch-build-guide-2.webp'
import sketchProdDetail from './images/cliq/sketch-prod-detail.webp'
import sketchProdList from './images/cliq/sketch-prod-list.webp'
import wireframeOverview from './images/cliq/wireframe-overview.webp'
import patternLib from './images/cliq/pattern-lib.png'
import neuGuidePb from './images/cliq/primary-btn-neu-guide.png' 
import neuGuideSb from './images/cliq/secondary-btn-neu-guide.png'
import typography from './images/cliq/typography.webp'
import kerning from './images/cliq/kerning.webp' 
import sitemap from './images/cliq/sitemap-lite.png'
import colorguide from './images/cliq/color-guide.png'
import logo from './images/cliq/cliq-logo.webp'
import productDetailR2 from './images/cliq/product-detail-r2.png'

// Import gif
import cmatrixBG from './images/cliq/cmatrix-blk-bg.gif'
import cliqWhiteTextAnim from './images/cliq/cliq-white-text-anim.gif'


const total = "03";

function Cliq(props) {
    return (
        <main>
        <div className="sect-1">
            <FourColumnNotesModule 
                img1={sketchGuide1} 
                img2={sketchGuide2} 
                img3={sketchProdDetail} 
                img4={sketchProdList} 
                citation={"SKETCHES"} 
                title={"SKETCHES AND FEATURE EXPLORATION"} 
                text={"Designing the layout of CLIQ needed to incorporate some form of education on the product and an unique product details layout to highlight the components."}
            />
        </div>
    
        <ModMaxCol 
            img={persona} 
            title={"THE PERSONAS"} 
            citation={"citation"} 
            p1={"CLIQ was designed with two persona groups in mind, a novice group and an enthusiasts group. Throughout the project we gathered qualitative dath through interviews of keyboard enthusiasts and novices."} 
            p2={"John represents the novice group. John is buying his first mechanical keyboard and does not know the technicalities of building a keyboard. Emma is an enthusiast, owns multiple keyboards, and enjoys choosing parts and building the keyboard."}
        />

       
        {/* Sect helper graphic */}
        <SectionHelperGraphic graphic={cliqWhiteTextAnim} title={"STYLE GUIDE"} sectionChapterCurrent={"01"} sectionChapterTotal={total} text={"Exploring color, typography and neumorphism"}/>


        {/* Text animation for typography*/}
        <ModMaxContainerGraphic img={typography}/>

        {/* Kerning */}
        <ModMaxContainerGraphic img={kerning}/>

        {/* color guide */}
        <ModMaxContainerGraphic img={colorguide}/>


        {/* slider neumorphicPb and Sb*/}
        <section className="sect-last sect-1">
            <div className="grid-container">
                <div className="proj-col-contain test-slide">
                    <Slider img1={neuGuidePb} img2={neuGuideSb}/>
                </div>

            </div>
        </section>

        <ModuleFiftyGRight img={logo} title={"Flexibility"} p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}/>
        
        {/* Sect helper graphic */}
        <SectionHelperText title={"WIREFRAME"} sectionChapterCurrent={"02"} sectionChapterTotal={total} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}/>

        <ModMaxContainerGraphic img={wireframeOverview} citation={"WIREFRAME"}/>

        {/* Greybox Wireframes */}
        <ModMaxCol img={sitemap} title={"GREY BOX WIREFRAME"} citation={"SITEMAP"} p1={"CLIQ contained 10 pages, designed in Figma. During the design phase my role was primarily to create the product details page and checkout funnel. Working in a team required me to maintain communication and work cohesively on components through a democratic format to ensure consistency."}/>

        <ModuleFiftyGRight img={productDetailR2} title={"PAGE REDESIGN"} p1={"The main requirements of the product details page were to highlight the product. Our research showed enthusiasts enjoy mechanical keyboards for the customization factor and the ability to choose components."} p2={"The objective was to improve the buying experience through providing a more detailed and artisanal shopping experience. Changes in the new design incorporated larger sections for the main components, while including images."}/>


        {/* Sect helper graphic */}
        <SectionHelperGraphic 
            graphic={cmatrixBG} title={"Development"} 
            sectionChapterCurrent={"03"} 
            sectionChapterTotal={total} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}
        />


        {/* Pattern Library */}
        <ModMaxCol 
            img={patternLib} 
            title={"Sections I managed"} 
            citation={"test"} 
            p1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."} 
            p2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse explicabo illo est labore, eveniet enim laboriosam. Quia soluta nobis tempora et sequi architecto impedit, qui molestias facilis, excepturi repudiandae."}
        />
        
        {/* Center module */}
        <CenterMod title={"Working in a team"} href={"https://danielxshi.github.io/IAT-339-Ecommerce-Website/"} org={"SFU IAT339 Project"} btnTitle={"View Website"} text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}/>

        {/* Next project */}
        <NextProject link={"/bosstep"} img={nextProj}/>
        </main>
    );
}

export default Cliq;
