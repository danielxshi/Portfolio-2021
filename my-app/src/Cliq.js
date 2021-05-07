// Router
import { Link } from "react-router-dom";

// Stylesheets
import './style/pages/_projects.scss';

// Import images
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';

function Cliq(props) {
    return (
        <main>

        {/* Persona */}
        <section className="personas-sect sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="img-contain span-50">
                            <img src={img43} alt=""/>
                        </div>
                        <div className="img-contain span-50">
                            <img src={img43} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Designing for<strong class="highlight-text">_</strong></h2>
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

        {/* neumorphic style */}
        <section className="style-sect-1 sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <h2 className="rel-margin-bot">Designing for<strong class="highlight-text">_</strong></h2>
                    <div className="sub-container grid-col-space">
                        <div className="span-6 img-contain">
                            <img src={img34} alt=""/>
                        </div>
                        <div className="span-4">
                            <div className="img-contain max-col rel-margin-bot">
                                <img src={img43} alt=""/>
                            </div>
                            <div className="img-contain">
                                <img src={img43} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Pt1 design idea<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Pt2 challenge caveat<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        {/* style guide */}
        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
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
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Ideating<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        </main>
    );
}

export default Cliq;
