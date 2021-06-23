import profilePicture from '../../images/sfu-headshot.png';

function AboutModule() {
    return (
        <section id="about" className="about-section">
            <div className="grid-container">
                <div className="max-bleed">
                    <h2 className="section-title">I am<strong className="highlight-text ">_</strong></h2>
                    <div className="sub-container">
                        <div className="span-3">
                            <div className="img-contain rel-margin-bot">
                                <img src={profilePicture} alt="" />
                            </div>
                        </div>
                        <div className="about-wrapper">
                        <h3 className="rel-margin-bot">XIANG DANIEL SHI</h3>
                            <p className="rel-margin-bot">A student from the Science and Interactive Arts and Technology department at Simon Fraser University, in pursuit of a Bachelors of Science with a focus in <strong className="highlight-text">Design</strong>. </p>
                            <p className="rel-margin-bot">Presently, learning REACT and Framer Motion through online tutorials and in my freetime I <strong className="highlight-text">freelance </strong> photography and videography.</p>
                        </div>
                    </div>
                </div>
                <div className="max-bleed">
                    <div className="sub-container">
                        <div className="about-wrapper">
                            <h3 className="rel-margin-bot">Noteable Achievements</h3>
                            <div className="anchor-80-left rel-margin-bot">
                                <p className="achievement-title"><strong>President's Honour Roll SFU</strong> - June 18, 2020</p>
                                <p>Maintained a minimum TGPA of 4.00 in Spring 2020 with at least 12 units counted towards the grade point average.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <p className="achievement-title"><strong>Web Development Instrutor @EmergeSFU</strong> - Janurary 27, 2021 - March 3, 2021</p>
                                <p>Instructed a multidisciplinary cohort of 15-50 students for EmergeSFU in the basics of HTML and CSS.</p>
                                <p>Over the course of 5 weekly sessions we worked towards developing skills to create and host a personal portfolio page on Github.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <p className="achievement-title"><strong>Presenter at 2021 FCAT Undergraduate Conference </strong> - March 05 2021</p>
                                <p>Showcased a renewable battery monitor mobile application. Designed in IAT333 Interactions Design, along with the team  (Cassandra, Keith and Nisha).</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <p className="achievement-title"><strong>Spring 2021 Project Showcase - SCHOOL OF INTERACTIVE ARTS &amp; TECHNOLOGY</strong> - In Process... 🤓</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutModule;