import { Link } from "react-router-dom";

function ProjectCard(props) {
    return(
        <section className="project project-1">
            <div className="sub-container">
                <div className="color-stripe-container-1">
                    <div 
                        className={
                            "color-stripe-2 " + props.color}
                        >    
                    </div>
                </div>
                <div className="max-col row-start-1">
                    <div className="grid-container">
                        <div className="color-stripe-container-2">
                            <div 
                                className={
                                    "color-stripe-2 " + props.color}
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-bleed row-start-1">
                    <div className={"grid-container neu-shadow " + props.tabColor}>
                        <div className="portfolio-item img-contain proj-home-grid-def">
                            <Link className="portfolio-thumb" to={props.linkTo} exact>
                                <picture>
                                    <source srcset={props.lrgGraphic} media="(min-width: 800px)" />
                                    <source srcset={props.smGraphic} media="(min-width: 400px)" />
                                    <img alt={props.alt} src={props.smGraphic} />
                                </picture>
                            </Link>
                        </div>
                        <div className="project-description">
                            <div className="sub-container">
                                <div className="title-wrapper desktop-project-header">
                                    <h2>{props.title}</h2>
                                    <p>{props.overview}</p>
                                </div>
                                <div className="contribution-wrapper-r rel-margin-bot">
                                    <h3>Role:</h3>
                                    <p>{props.role}</p>
                                </div>
                                <Link className="home-border-btn primary-btn" to={props.linkTo}> View Process</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectCard;