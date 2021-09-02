import profilePicture from '../../images/sfu-headshot-800x800.webp'

function AboutModule() {
    return (
        <section id="about" className="about-section">
            <div className="grid-container">
                <div className="max-bleed">
                    <div className="sub-container">
                        <div className="span-3">
                            <div className="img-contain rel-margin-bot">
                                <img loading="lazy" src={profilePicture} alt="" />
                            </div>
                        </div>
                        <div className="about-wrapper personal-bio">
                            <h3 className="rel-margin-bot">DANIEL XIANG SHI</h3>
                            <p className="rel-margin-bot">A student from the Science and Interactive Arts and Technology department at Simon Fraser University, in pursuit of a Bachelors of Science with a focus in <strong className="highlight-text">Design</strong>. Presently, learning REACT and Framer Motion through online tutorials and in my freetime I <strong className="highlight-text">freelance </strong> photography and videography.</p>
                        </div>
                    </div>
                </div>
                <div className="underline-container max-bleed">
                    <div className="underline"></div>
                </div>
                <div className="max-bleed about-achievements">
                    <div className="sub-container">
                    <div className="title-wrapper">
                        <h3>Noteable Achievements</h3>
                    </div>
                        <div className="about-wrapper">
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>President's Honour Roll | Simon Fraser University</strong></h4>
                                    <p>JUNE|20</p> 
                                </div>
                                <p>Maintained a minimum TGPA of 4.00 in Spring 2020 with at least 12 units counted towards the grade point average.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>Web Development Instrutor | EmergeSFU</strong></h4>
                                    <p>JAN21|MAR21</p>
                                </div>
                                <p>Instructed a multidisciplinary cohort of 15-50 students for EmergeSFU in the basics of HTML and CSS.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong><a target="_blank" href="https://www.sfu.ca/fcat/events/ugc1.html">Presenter | 2021 FCAT Undergraduate Conference</a></strong></h4>
                                    <p>MAR|21</p>
                                </div>
                                <p>Presented a renewable battery monitor mobile applicationation designed for our client company Moment Energy at Simon Fraser Universities Undergraduate Conference. The application was designed in a team of 4 for Interactions Design course at SFU.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong><a target="_blank" href="https://www.sfu.ca/siat/showcase/spring-2021-project-showcase/upper-division/iat-339-cliq.html">Showcase | School of Interactive Arts &amp; Technology Spring 2021 Project Showcase</a></strong></h4>
                                    <p>JAN|21</p>
                                </div>
                                <p>Showcased an E-Commerce website for artisinal keyboards. Designed and developed in a team of 3 for Website Design course at SFU.</p>
                            </div>
                            <div className="anchor-80-left rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong><a target="_blank" href="https://www.sfu.ca/siat/fall-2020-project-showcase/moment-track.html">Showcase | School of Interactive Arts &amp; Technology Fall 2020 Project Showcase</a></strong></h4>
                                    <p>MAY|21</p>
                                </div>
                                <p>Showcased a renewable battery monitor mobile application. Designed in a team of 4 for Interactions Design course at SFU.</p>
                            </div>
                        </div>

                        <div className="underline-container max-col">
                            <div className="underline"></div>
                        </div>
                        <div className="title-wrapper">
                            <h3>Currently Representing</h3>
                        </div>
                        <div className="about-wrapper">
                            <div className="content-group rel-margin-bot">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>UPhoto</strong></h4>
                                    <p>SEPT 2020 | PRESENT</p>
                                </div>
                                <p>Graphic Designer</p>
                            </div>
                            <div className="content-group">
                                <div className="title-wrapper">
                                    <h4 className="achievement-title"><strong>CaseIT</strong></h4>
                                    <p>JUNE 2021 | PRESENT</p>
                                </div>
                                <p>Director of Web Development | Director of Media</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutModule;