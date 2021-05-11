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

        {/* Intro */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space flex-container neu-container">
                        <div className="flex-25 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* Intro */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space flex-container neu-container">
                        <div className="flex-25 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
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
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Why we chose to make a childrens health app */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-fit span-4 gcs-9-4">
                            <img src={img43} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper */}
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Persona */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-fit span-4 gcs-9-4">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="gcs-8-5">
                            <h2 className="rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-5">
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="span-50r-3p1 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper */}
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">working in a team <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="center-module ">
                    <div className="profile-img-contain">
                        <div className="img-fit">
                            <img src={imgProf} alt="" />
                        </div>
                        <div className="img-fit">
                            <img src={imgProf} alt="" />
                        </div>
                        <div className="img-fit">
                            <img src={imgProf} alt="" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                </div>
                
            </div>
        </section>

        <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50 img-fit">
                            <img src={img43} alt=""/>
                        </div>
                        <div className="span-50 img-fit">
                            <img src={img43} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
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
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <p>01/05</p>
                    </div>
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
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Erma */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-fit span-4 gcs-9-4">
                            <img src={img43} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="max-col-proj-details img-fit">
                            <img src={img43} alt="" />
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Erma */}
        <section className="personas-sect sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h2 className="h2-anchor-right rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                            <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        </div>
                        <div className="img-fit span-4 gcs-8-5">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper */}
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Sketches */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={img34} alt=""/>
                        </div>
                    </div>
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
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="max-col img-fit">
                            <img src={img43} alt="" />
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="center-module ">
                    <h2 className="h2-anchor-left rel-margin-bot">working in a team <strong className="highlight-text">_</strong></h2>
                    <p className="rel-margin-bot">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                    <p className="rel-margin-bot"><strong>SFU IAT339 Project</strong></p>
                    <div className="primary-btn black-border-btn">
                        VIEW WEBSITE
                    </div>
                </div>
            </div>
        </section>

        {/* abstract to component */}
        <section className="next-proj sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">working in a team <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="gcs-8-5">
                    <div className="img-fit">
                        <img src={img2x1} alt="" />
                    </div>
                </div>
            </div>
        </section>

        </main>
    );
}

export default Bosstep;
