// Stylesheets
import './style/pages/_projects.scss';

// Import placeholders
import img34 from './images/placeholder/placeholder-3x4.png';
import img43 from './images/placeholder/placeholder-4x3.png';
// import img2x1 from './images/placeholder/placeholder-2x1.png';
import imgProf from './images/placeholder/placeholder-prof-1x1.png';
import imgVid from './images/placeholder/video-placeholder.png';
import imgVid1x1 from './images/placeholder/vid-1x1.png';

// Import images
import nextProj from './images/boss-1000x600.png'

function MomentTrack(props) {
    return (
        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="center-module ">
                    <h2 className="rel-margin-bot">{props.title} <strong className="highlight-text">_</strong></h2>
                    <p className="rel-margin-bot">{props.text}</p>
                    <p className="rel-margin-bot"><strong>{props.org}</strong></p>
                    <a href={props.href} className="primary-btn black-border-btn">
                        {props.btnTitle}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MomentTrack;