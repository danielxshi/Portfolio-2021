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

        </main>
    );
}

export default Bosstep;
