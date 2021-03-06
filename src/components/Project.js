import React from 'react';

// Stylesheets
import '../style/pages/_projects.scss';

function Project(props) {
    return (
        <div className="project-details-hero-container">
            {/* Desktop */}
            <section className="project-details-hero-desktop details-container">
                <div className="proj-info-wrapper">
                    <div className="grid-container">
                        <div className="project-title-wrapper">
                            <div className="project-title">
                                <h1>{props.messages.title}</h1>
                                <p>{props.messages.category}</p>
                            </div>
                            <a 
                                className="black-border-btn primary-btn" 
                                rel="noopener noreferrer" target="_blank" 
                                href={props.demo}>{props.messages.cta}
                            </a>
                        </div>
                        <div className="project-description-wrapper">
                            <h3>Description</h3>
                            <p>{props.messages.description}</p>
                        </div>
                        <div className="details-wrapper">
                            <div className="sub-details-wrapper">
                                <h3>Role</h3>
                                <p>{props.messages.role}</p>
                                <div className="rel-margin-top">
                                    <h3>{props.clientCheck}</h3>
                                    <a className="link-cta" arget="_blank" href={props.clientHref}>{props.messages.client}</a>
                                </div>
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
                    </div>
                    <div className="hero-banner">
                        <img src={props.banner} alt={props.alt}/>
                    </div>
                </div>
            </section>

            {/* Mobile */}
            <section className={props.mobileBannerContainer}>
                <div className="sub-container">
                    <div className="mobileBannerBG">
                        <div className={props.bannerBG}></div>
                    </div>
                    <div className="text-wrapper">

                        <div className="img-contain">
                            <img src={props.mobileBannerDemo} alt="" />
                        </div>
                        <div className="rel-margin-bot title-wrapper">
                            <h1 className="project-details-h1">Title</h1>
                            <p>Game</p>
                        </div>
                        <h3>Description</h3>
                        <p className="rel-margin-bot">{props.messages.description}</p>
                        <a 
                            className="sect-last rel-margin-bot black-border-btn primary-btn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={props.demo}>{props.cta}
                        </a>
                    </div>
                </div>
                
                <div className="sub-container details-container">
                    <div className="proj-info-wrapper">
                        <div className="grid-container">
                            <div className="proj-col-contain">
                                <h2 className="rel-margin-bot">Project Details</h2>
                                <div className="rel-margin-bot">
                                    <h3>Role</h3>
                                    <p>{props.messages.role}</p>
                                </div>
                                <div className="rel-margin-bot">
                                    <h3>{props.clientCheck}</h3>
                                    <a className="link-cta" arget="_blank" href={props.clientHref}>{props.messages.client}</a>
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
