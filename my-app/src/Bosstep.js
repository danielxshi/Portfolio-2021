import { Link } from "react-router-dom";

// Stylesheets
import './style/pages/_projects.scss';

// Import image placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';

// Import images

// Critique
import critNotes1 from './images/bosstep/crit-notes-1.jpg';
import critNotes2 from './images/bosstep/crit-notes-2.jpg';
import critNotes3 from './images/bosstep/crit-notes-3.jpg';
import critNotes4 from './images/bosstep/crit-notes-4.jpg';

// Sketches

// sketch-home
import sketchHomeMaster from './images/bosstep/sketch-home.jpg'
import sketchHomeIter1 from './images/bosstep/sketch-home-card-ver.jpg'
import sketchHomeIter2 from './images/bosstep/sketch-home-triplet-ver.jpg'
// sketch-games
import sketchMinigameMaster from './images/bosstep/sketch-minigame.jpg'
import sketchMinigameIter1 from './images/bosstep/sketch-minigame-iter1.jpg'
import sketchMinigameIter2 from './images/bosstep/sketch-minigame-iter2.jpg'

// Prototype
import protoAddFriend from './images/bosstep/proto-add-friend.png'
import protoHome from './images/bosstep/proto-home.png'
import minigameM from './images/bosstep/proto-minigame-m.png'
import minigameD from './images/bosstep/proto-minigame-d.png'

// Wireframe
import wireHome from './images/bosstep/wire-home-bstep.jpg'
import wireMiniGame from './images/bosstep/wire-minigame-bstep.jpg'
import wireRewardDetail from './images/bosstep/wire-reward-bstep.jpg'
import wireRewardList from './images/bosstep/wire-weekly-reward-bstep.jpg'

// Research
import primaryResearch from './images/bosstep/primary-research-bstep.jpg'
import secondaryResearch from './images/bosstep/secondary-research-bstep.jpg'
import researchLoc from './images/bosstep/research-loc.jpg'

// Persona
import persona from './images/bosstep/persona-bstep.jpg'

// Next project
import nextProj from './images/cliq-1000x600.png'

function Bosstep(props) {
    return (
        <main>



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
                            <img src={persona} alt=""/>
                        </div>
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
                            <img src={sketchHomeMaster} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={sketchHomeIter1} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={sketchHomeIter2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">At the core<strong class="highlight-text">_</strong></h2>
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
                            <img src={sketchMinigameIter2} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={sketchMinigameIter1} alt=""/>
                        </div>
                        <div className="flex-25 img-fit">
                            <img src={sketchMinigameMaster} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Expanding the idea<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* sect helper */}
        <section className="sect-helper sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2 className="span-2">My role<strong className="highlight-text">_</strong></h2>
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
                        <div className="span-3 img-fit">
                            <img src={minigameM} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={minigameD} alt=""/>
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
                            <img src={protoHome} alt=""/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={protoAddFriend} alt=""/>
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
                        <h2 className="span-2">Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-50 img-fit">
                            <img src={primaryResearch} alt=""/>
                        </div>
                        <div className="span-50 img-fit">
                            <img src={secondaryResearch} alt=""/>
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
                        <h2 className="span-2">A/B Testing<strong className="highlight-text">_</strong></h2>
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
                            <img src={researchLoc} alt=""/>
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
                            <h2 className="h2-anchor-right rel-margin-bot">Redesign & Design Considerations<strong class="highlight-text">_</strong></h2>
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
                        <h2 className="span-2">Critique<strong className="highlight-text">_</strong></h2>
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
                        <h2 className="span-2">Final Design<strong className="highlight-text">_</strong></h2>
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
                <h2 className="h2-anchor-left rel-margin-bot">Working in a team <strong className="highlight-text">_</strong></h2>
                <div className="center-module ">
                    <p className="rel-margin-bot">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis.</p>
                    <p className="rel-margin-bot"><strong>SFU IAT339 Project</strong></p>
                    <div className="primary-btn black-border-btn">
                        VIEW WEBSITE
                    </div>
                </div>


                {/* Right anchor */}

                {/* <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2>Lorem<strong className="highlight-text">_</strong></h2>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis amet quibusdam natus magnam nesciunt! Facilis natus facere ad rem modi aliquam reprehenderit, aliquid odit velit impedit reiciendis quo perferendis.</p>
                        <p className="anchor-80-right rel-margin-bot"><strong>SFU IAT339 Project</strong></p>
                        <div className="anchor-80-right primary-btn black-border-btn">
                            VIEW WEBSITE
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

        {/* abstract to component */}
        {/* !Substitute for 2x1 aspect ratio */}

        <section className="next-proj sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2 className="h2-anchor-left">Next project <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="anchor-80-right">
                    <div className="img-fit">
                        {/* <img src={img2x1} alt="" /> */}
                        <img src={nextProj} alt="" />
                    </div>
                </div>
            </div>
        </section>

        </main>
    );
}

export default Bosstep;
