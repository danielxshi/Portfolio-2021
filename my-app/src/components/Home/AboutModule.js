import profilePicture from '../../images/sfu-headshot.png';

function AboutModule() {
    return (
        <section id="about" className="about-section">
            <div className="grid-container">
                <div className="max-bleed">
                    <div className="sub-container">
                        <div className="span-3">
                            <div className="img-contain rel-margin-bot">
                                <img src={profilePicture} alt="" />
                            </div>
                        </div>
                        <div className="about-wrapper personal-bio">
                            <h3 className="rel-margin-bot">XIANG DANIEL SHI</h3>
                            <p className="rel-margin-bot">A student from the Science and Interactive Arts and Technology department at Simon Fraser University, in pursuit of a Bachelors of Science with a focus in <strong className="highlight-text">Design</strong>. Presently, learning REACT and Framer Motion through online tutorials and in my freetime I <strong className="highlight-text">freelance </strong> photography and videography.</p>
                        </div>
                    </div>
                </div>
                <div className="underline-container max-bleed">
                    <div className="underline"></div>
                </div>
                <div className="max-bleed about-achievements">
                    <div className="sub-container">
                        <h3 className="rel-margin-bot">Noteable Achievements</h3>
                        <div className="about-wrapper">
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>President's Honour Roll SFU</strong></h4>
                                    <p>JUNE20</p> 
                                </div>
                                <p>Maintained a minimum TGPA of 4.00 in Spring 2020 with at least 12 units counted towards the grade point average.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>Web Development Instrutor @EmergeSFU</strong></h4>
                                    <p>JAN21 | MAR21</p>
                                </div>
                                <p>Instructed a multidisciplinary cohort of 15-50 students for EmergeSFU in the basics of HTML and CSS.</p>
                             
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>Presenter at 2021 FCAT Undergraduate Conference </strong></h4>
                                    <p>MAR 21</p>
                                </div>
                                <p>Showcased a renewable battery monitor mobile application. Designed in a team of 4 for Interactions Design course at SFU.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutModule;