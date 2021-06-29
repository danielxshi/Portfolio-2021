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
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import FourColumnNotesModule from "./components/ProjectDetails/FourColumnNotes"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import Slider from "./components/ProjectDetails/Slider"
import SectionDivider from "./components/SectionDivider"
import Credits from "./components/ProjectDetails/Credits"

// Import Messages
import projectMessages from './components/ProjectMessages.js'

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
                title={"Sketches and Feature Exploration"} 
                text={"Designing the layout of CLIQ needed to incorporate some form of education on the product and an unique product details layout to highlight the components."}
            />
        </div>
    
        <ModMaxCol 
            img={persona} 
            title={"The Personas"} 
            citation={"citation"} 
            p1={"CLIQ was designed with two persona groups in mind, a novice group and an enthusiasts group. Throughout the project we gathered qualitative dath through interviews of keyboard enthusiasts and novices."} 
            p2={"John represents the novice group. John is buying his first mechanical keyboard and does not know the technicalities of building a keyboard. Emma is an enthusiast, owns multiple keyboards, and enjoys choosing parts and building the keyboard."}
        />

        <SectionHelperGraphic 
            graphic={cliqWhiteTextAnim} 
            title={"Style Guide"} 
            sectionChapterCurrent={"01"} 
            sectionChapterTotal={total} 
            text={"Exploring color, typography and neumorphism"}
        />

        <ModMaxContainerGraphic img={typography}/>

        <ModMaxContainerGraphic img={kerning}/>

        <ModMaxContainerGraphic img={colorguide}/>

        <section className="sect-last sect-1">
            <div className="grid-container">
                <div className="proj-col-contain test-slide">
                    <Slider img1={neuGuidePb} img2={neuGuideSb}/>
                </div>
            </div>
        </section>

        <ModuleFiftyGRight 
            img={logo} 
            title={"Flexibility"} 
            p1={"Neumorphism is a user interface design that uses shadows to simulate depth. The immediate challenge is accessibility while creating variety within the design. My proposal of neumorphism was well received by the team and professor. The supporting reasons were the feeling of tactility in neumorphism bridging towards the keyboard switches."} 
            p2={"Prototyping with my team different shadows through x & y position, blur and color resulted in one final MVP looking at tactility of the neumorphism and accessibility presented in contrasting it from the our background."}
            citation={"CLIQ LOGO"}
        />
        
        <SectionHelperText 
            title={"Wireframe"} 
            sectionChapterCurrent={"02"} 
            sectionChapterTotal={total} 
            text={"Creating grey box wireframes"}
        />

        <ModMaxContainerGraphic 
            img={wireframeOverview} 
            citation={"WIREFRAME"}
        />


        <ModMaxContainerGraphic 
            img={sitemap} 
            citation={"SITEMAP"} 
        />

        <ModuleFiftyGRight 
            img={productDetailR2} 
            title={"Pages Managed"} 
            p1={"The main requirements of the product details page were to highlight the product. Our research showed enthusiasts enjoy mechanical keyboards for the customization factor and the ability to choose components."} 
            p2={"The objective was to improve the buying experience through providing a more detailed and artisanal shopping experience. Changes in the new design incorporated larger sections for the main components, while including images."}
        />

        <SectionHelperGraphic 
            graphic={cmatrixBG} title={"Development"} 
            sectionChapterCurrent={"03"} 
            sectionChapterTotal={total} 
            text={"Product details | Guides "}
        />

        <ModMaxCol 
            img={patternLib} 
            title={"Pattern Library"} 
            citation={"CLIQ PATTERN LIBRARY"} 
            p1={"How it was developed. How I contributed"} 
            p2={"Sections I managed - and add hyperlink to pattern library"}
        />


        <ModMaxContainerGraphic 
            img={img2x1} 
            citation={"PRODUCT DETAILS PAGES | GUIDES PAGE"} 
        />


        <ModuleFiftyGRight 
            img={imgProf} 
            title={"Design Challenge"} 
            p1={"The main requirements of the product details page were to highlight the product. Our research showed enthusiasts enjoy mechanical keyboards for the customization factor and the ability to choose components."} 
            p2={"The objective was to improve the buying experience through providing a more detailed and artisanal shopping experience. Changes in the new design incorporated larger sections for the main components, while including images."}
        />

        <SectionDivider/>
        
        <CenterMod 
            href={"https://danielxshi.github.io/IAT-339-Ecommerce-Website/"} 
            btnTitle={"View Website"} 
            text={"The teams prior experience with front-end development, Github, and Figma was advantageous and allowed us to work cohesively. Potential steps are to convert the website to a more modern framework such as REACT and perform usability testing."}
        />

        <SectionDivider/>
        
        <Credits
            ch1={"Professor | Teaching Assistant"}
            cp1={"Paul Brokenshire | Breanne Lewis"}
            ch2={"School"}
            cp2={"Simon Fraser University"}
            cp21={"School of Interactive Arts and Technology"}
            ch3={"Recognition"}
            cp3={"Highest grade received for design"}
            cp31={"Presenter in 2021 SIAT Showcase"}
            ch4={"Role"}
            cp41={"UX/UI Design"}
            cp42={"Website Development"}
            ch5={"Date"}
            cp5={projectMessages.cliq.date}
            ch6={"Team"}
            cp6={"Marina Cameron"}
            cp61={"Jason Xu"}
        />

        <NextProject 
            link={"/bosstep"} 
            img={nextProj}
        />
        </main>
    );
}

export default Cliq;
