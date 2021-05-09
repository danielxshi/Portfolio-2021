import { Link } from "react-router-dom";

// Stylesheets
import './style/pages/_projects.scss';

// Import images
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';


function Bosstep(props) {
    return (
        <main>

        {/* Persona */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-contain span-4 gcs-9-4">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Sketches */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <p>01/05</p>
                    </div>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Videos */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
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
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">working in a team <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="center-module ">
                    <p className="rel-margin-bot">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                    <p className="rel-margin-bot"><strong>SFU IAT334 Project</strong></p>
                </div>
            </div>
        </section>

        {/* Figma showcase */}
        <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="img-contain rel-margin-bot">
                        <img src={img2x1} alt=""/>
                    </div>
                    <p>01/05</p>
                </div>
            </div>
        </section>

        {/* Persona */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-contain gcs-9-4">
                            <img src={img43} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Research table */}
        <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                    <div className="img-contain rel-margin-bot">
                        <img src={img2x1} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        {/* Design challenge */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-contain span-3">
                            <img src={imgVid1x1} alt=""/>
                        </div>
                        <div className="img-contain span-3">
                            <img src={imgVid1x1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="row-start-1 margin-rel-bot">Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="row-start-2 anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Sketches */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <p>01/05</p>
                    </div>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Sketches */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <p>01/05</p>
                    </div>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">working in a team <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="center-module ">
                    <p className="rel-margin-bot">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                    <p className="rel-margin-bot"><strong>SFU IAT339 Project</strong></p>
                    <div className="primary-btn">
                        VIEW WEBSITE
                    </div>
                </div>
            </div>
        </section>

        {/* abstract to component */}
        <section className="next-proj sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">working in a team <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="anchor-80-right">
                    <div className="img-contain">
                        <img src={img2x1} alt="" />
                    </div>
                </div>
            </div>
        </section>

        </main>
    );
}

export default Bosstep;
