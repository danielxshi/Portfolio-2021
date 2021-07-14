import { Link } from "react-router-dom";

function ProjectCard(props) {
    return(
        <div className="project grid-container project-mobile-module">
            <div className="project-headline-wrapper">
                <h2 className="project-headline">{props.title}</h2>
            </div>
            <div className="underline-container max-bleed">
                <div className="underline"></div>
                <h4 className="project-number">{props.number}</h4>
            </div>
            <div className="portfolio-item img-contain">
                <Link className="portfolio-thumb" to={props.linkTo} exact>
                    <picture>
                        <source srcSet={props.lrgGraphic} media="(min-width: 800px)" />
                        <source srcSet={props.smGraphic} media="(min-width: 400px)" />
                        <img alt={props.alt} src={props.smGraphic} />
                    </picture>
                </Link>
            </div>
            <div className="project-description-mobile">
                <div className="description-wrapper project-cat-1">
                    <h3 clasName="project-category-title">Role</h3>
                    <p>{props.role}</p>
                </div>
                <div className="description-wrapper project-cat-2">
                    <h3 clasName="project-category-title">Date</h3>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;