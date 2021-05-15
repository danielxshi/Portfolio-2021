import { Link } from "react-router-dom";

// Stylesheets
import '../style/pages/_projects.scss';

function Project(props) {
    return (
        <div className="project-details-hero-container">
            {/* Desktop */}
            <section className="project-details-hero-desktop details-container">
                <div className="hero-banner">
                    <img src={props.banner} alt={props.alt}/>
                </div>
                <div className="proj-info-wrapper">
                    <div className="grid-container">
                        <div className="project-title-wrapper">
                            <h1>{props.messages.title}</h1>
                            <p>{props.messages.category}</p>
                        </div>
                        <div className="project-description-wrapper">
                            <p>{props.messages.description}</p>
                        </div>
                        <div className="details-wrapper">
                            <div className="sub-details-wrapper">
                                <h3>Role</h3>
                                <p>{props.messages.role}</p>
                            </div>
                            <div className="sub-details-wrapper">
                                <h3>Date</h3>
                                <p>{props.messages.date}</p>
                            </div>
                            <div className="sub-details-wrapper">
                                <h3>Team</h3>
                                <p>{props.messages.team}</p>
                            </div>
                        </div>
                        
                        <Link class="black-border-btn primary-btn" to='/bosstep'>{props.messages.cta}</Link>
                    </div>
                </div>
            </section>

            {/* Mobile */}
            <section className="project-details-hero-mobile">
                <div className="sub-container">
                    <div className="max-col mobileBannerBG">
                        <div className="hero-banner-mobile"></div>
                    </div>
                    <div className="text-wrapper">

                        <div className="img-contain">
                            <img src={props.mobileBannerDemo} alt="" />
                        </div>
                        <div className="rel-margin-bot title-wrapper">
                            <h1 className="project-details-h1">Title</h1>
                            <p>Game</p>
                        </div>
                        <p className="rel-margin-bot">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae repudiandae commodi quaerat, e</p>
                        
                        <a class="sect-last rel-margin-bot black-border-btn primary-btn" href="#">{props.messages.cta}</a>
                        {/* <div className="img-contain">
                            <img src={props.mobileBannerDemo} alt="" />
                        </div> */}
                    </div>
                </div>
                
                {/* neumorphic section */}
                <div className="sub-container details-container">
                    <div className="max-col proj-info-wrapper">
                        <div className="grid-container">
                            <div className="max-col">
                                <h2 className="rel-margin-bot">Project Details<strong className="highlight-text">_</strong></h2>
                                <div className="rel-margin-bot">
                                    <h3>Role</h3>
                                    <p>{props.messages.role}</p>
                                </div>
                                <div className="rel-margin-bot">
                                    <h3>Date</h3>
                                    <p>{props.messages.date}</p>
                                </div>
                                <div>
                                    <h3>Team</h3>
                                    <p>{props.messages.team}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            

        </div>
    );
}

export default Project;
