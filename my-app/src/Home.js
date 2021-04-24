import './style/App.css';
import './style/grid.css';
import BOSSTEP from './images/boss-1000x600.png';
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
      <main>
        <div className="intro-wrapper">
            <div className="grid-container">
                <div className="col-10">
                    <h1>XIANG</h1>
                    <p>Aspiring UX/UI Web Developer</p>
                </div>
            </div>
        </div>
    
        <section className="about-section">
            <div className="grid-container">
                <div className="about-row-1-col-1">
                    <h2 className="subheading">I am <strong className="highlight-text">_</strong></h2>
                </div>
                <div className="about-row-1-col-2">
                    <p>Currently a student from the Science and Interactive Arts and Technology department at Simon Fraser University</p>
                </div>
                <div className="about-row-1-col-3">
                    <p>I first started web development in 2016 at RED Academy and I am currently purusing a Bachelors of Science with a focus in Design </p>
                </div>
                <div className="about-row-col"></div>
                <div className="about-row-2-col-2">
                    <p>My goal is to find a career in building interactive web applications</p>
                </div>
                </div>
        </section>
        <section className="project">
            <div className="grid-container">
                <div className="col-10">
                    <h2 className="section-header">Recent Projects</h2>
                    <div>
                        <div className="project-img-wrapper">
                            <Link to='/bosstep'>
                                <img alt="BOSSTEP Project Graphic" src={BOSSTEP}/>                            
                            </Link>
                        </div>
                        <div className="project-description">
                            <h2 className="title-wrapper desktop-project-header">
                                BOSSTEP
                            </h2>
                            <h3>Role:</h3>
                            <p>Website, UX/UI Minigames, Home Screen, Friends List Screen, A/B Testing</p>
                            <h3>Description:</h3>
                            <p>Gamified exercise app geared towards kids who can choose heroes to play</p>
                            <a href="" className="secondary-btn">
                                <Link to='/bosstep'>
                                    View Process
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
      </main>
  );
}

export default Home;
