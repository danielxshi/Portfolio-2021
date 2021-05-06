import { Link } from "react-router-dom";

// Import images
import imgTest from './images/cliq/cliq-banner-2048x768.png';

function Cliq(props) {
    return (
        <main>
        <section className="personas-sect sect-1">
            <div className="grid-row-space grid-container">
                <div className="col-10">
                    <div className="sub-container grid-col-space">
                        <div className="img-contain span-50 rel-margin-bot">
                            <img src={imgTest} alt=""/>
                        </div>
                        <div className="img-contain span-50 rel-margin-bot">
                            <img src={imgTest} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Letting the ideas flow<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        <section className="sketch-sect sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="col-10">
                    <div className="sub-container grid-col-space">
                        <div className="img-contain span-50 rel-margin-bot">
                            <img src={imgTest} alt=""/>
                        </div>
                        <div className="img-contain span-50 rel-margin-bot">
                            <img src={imgTest} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus.</p>
                        <h2 className="h2-anchor-right">Letting the ideas flow<strong class="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>

        </main>
    );
}

export default Cliq;
