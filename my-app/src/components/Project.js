import { Link } from "react-router-dom";

function Project(props) {
    return (
        <section className="details-container">
            <div className="hero-banner">
                <img src={props.banner} alt="BOSSTEP Banner"/>
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
    );
}

export default Project;
