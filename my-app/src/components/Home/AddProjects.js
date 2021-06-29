import TTA from '../../images/TTAAnimationCover.webp';
import MainEvent from '../../images/mainevent.gif';
import TeamPhantom from '../../images/teamphantom.gif';

function AddProjects(){
    return(
    <section className="project-1 otr-proj-sect">
        <div className="grid-container">
            <div className="max-bleed">
                <h2 className="section-title section-title-space">More projects 🥳</h2>
                <div className="sub-container otr-proj-container">
                    <div className="otr-proj-spec-wrapper otr-proj-1">
                        <div className="otr-proj portfolio-item img-fit proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
                                <img src={TTA} alt="Top Ten Animation Project Graphic"/>
                            </a>
                        </div>
                        <div className="title-wrapper">
                            <h3>
                                <div className="underscore-cta">
                                    <a href="https://www.youtube.com/watch?v=rnj6hVkEDpg">
                                        Maya Animation - Goku vs Frieza
                                    </a>
                                </div>
                            </h3>
                            <p>JAN21|APR21</p>
                        </div>
                        <div className="underline-container otr-divider-col">
                            <div className="underline"></div>
                        </div>
                        <p><strong>Role</strong> - rigging, sequencing, editing and sound design.</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-2">
                        <div className="otr-proj-1 otr-proj portfolio-item img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
                                <img src={MainEvent} alt="The Main Event GIF"/>
                            </a>
                        </div>
                        <div className="title-wrapper">
                            <h3>
                                <div className="underscore-cta">
                                    <a href="https://www.youtube.com/watch?v=PAtd3-VlaaU">
                                        The Main Event
                                    </a>
                                </div>
                            </h3>
                            <p>OCT19</p>
                        </div>
                        <div className="underline-container otr-divider-col">
                            <div className="underline"></div>
                        </div>
                        <p><strong>Role</strong> - videographer</p>
                    </div>
                    <div className="otr-proj-spec-wrapper otr-proj-3">
                        <div className="otr-proj-1 otr-proj portfolio-item img-contain proj-home-grid-def-maintain-w">
                            <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/yjXwb3fFqHA">
                                <img src={TeamPhantom} alt="Team Phantom GIF"/>
                            </a>
                        </div>
                        <div className="title-wrapper">
                            <h3>
                                <div className="underscore-cta">
                                    <a href="https://youtu.be/yjXwb3fFqHA">
                                        Team Phantom
                                    </a>
                                </div>
                            </h3>
                            <p>JAN21|APR21</p>
                        </div>

                        <div className="underline-container otr-divider-col">
                            <div className="underline"></div>
                        </div>
                        <p><strong>Role</strong> - cinematographer and colorist</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
} export default AddProjects;