function Credits(props) {
    return(
        <section className="credits-section sect-last">
            <div className="grid-container">
                <div className="title-wrapper">
                    <h3>Credits</h3>
                </div>
                <div className="content-wrapper content-wrap-1 rel-margin-bot">
                    <div className="content-group">
                        <h4>{props.ch1}</h4>
                        <p>{props.cp1}</p>
                    </div>
                    <div className="content-group">    
                        <h4>{props.ch2}</h4>
                        <p>{props.cp2}</p>
                        <p>{props.cp21}</p>
                    </div>
                    <div className="content-group">    
                        <h4>{props.ch3}</h4>
                        <p className="rel-margin-bot">{props.cp3}</p>
                        <p className="rel-margin-bot">{props.cp31}</p>
                        <p>{props.cp32}</p>
                    </div>
                </div>
                <div className="content-wrapper content-wrap-2">
                    <div className="content-group">
                        <h4>{props.ch4}</h4>
                        <p>{props.cp4}</p>
                        <p>{props.cp41}</p>
                        <p>{props.cp42}</p>
                    </div>
                    <div className="content-group">
                        <h4>{props.ch5}</h4>
                        <p>{props.cp5}</p>
                    </div>
                    <div className="content-group">
                        <h4>{props.ch6}</h4>
                        <p>{props.cp6}</p>
                        <p>{props.cp61}</p>
                    </div>
                </div>
            </div>
        </section>
    )
} export default Credits;