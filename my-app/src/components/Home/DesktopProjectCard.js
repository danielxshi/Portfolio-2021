import { Link } from "react-router-dom";

function DesktopProjectCard(props) {
    return(
        <div className="project project-desktop-module">
            <div className="grid-container">
                <div className="color-stripe-container-1">
                    <div 
                        className={
                            "color-stripe-2 " + props.color}
                        >    
                    </div>
                </div>
                <div className="max-col row-start-1">
                    <div className="sub-container">
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
                    <div className={"sub-container neu-shadow grid-container-card " + props.tabColor}>
                        <div className="portfolio-item img-contain proj-home-grid-def">
                            <Link className="portfolio-thumb" to={props.linkTo} exact>
                                <picture>
                                    <source srcSet={props.lrgGraphic} media="(min-width: 800px)" />
                                    <source srcSet={props.smGraphic} media="(min-width: 400px)" />
                                    <img alt={props.alt} src={props.smGraphic} />
                                </picture>
                            </Link>
                        </div>
                        <div className="project-description">
                            <div className="sub-container">
                                <div className="title-wrapper desktop-project-header">
                                    <h3 className="home-sub-heading">{props.title}</h3>
                                    <div className="underline-container">
                                        <div className="underline-white"></div>
                                        <h4>{props.projectNumber}</h4>
                                    </div>
                                    <p>{props.overview}</p>
                                </div>
                                <div className="contribution-wrapper-r rel-margin-bot">
                                    <h4>Role:</h4>
                                    <p>{props.role}</p>
                                </div>
                                <Link className={props.ctaClass + " white-border-btn home-border-btn primary-btn"} to={props.linkTo}>{props.cta}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopProjectCard;