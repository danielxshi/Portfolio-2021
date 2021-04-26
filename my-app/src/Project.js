import './style/App.scss';
import './style/grid.scss';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Project(props) {
    return (
        <section className="details-container">
            <div className="hero-banner">
                <img src={props.banner} alt="BOSSTEP Banner"/>
            </div>
            <div className="proj-info-wrapper">
                <div className="grid-container">
                    <div className="col-10 project-text-wrapper">
                        <p>{props.messages.category}</p>
                        <h1>{props.messages.title}</h1>
                    </div>
                    <div className="col-10">
                        <div className="sub-container">
                            <div className="project-description-container">
                                <p>{props.messages.description}</p>
                                <Link class="black-border-btn primary-btn" to='/bosstep'>VIEW WEBSITE</Link>
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
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Project;
