function TwoColNotes(props) {
    return (
        <section className="sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="rel-margin-bot sub-container grid-col-space">
                        <div className="span-50 img-fit">
                            <img src={props.img1} alt={props.alt1}/>
                        </div>
                        <div className="span-50 img-fit">
                            <img src={props.img2} alt={props.alt2}/>
                        </div>
                    </div>
                    <p className="citation">{props.citation}</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="text-grid-left">{props.text}</p>
                        <h3 className="text-grid-right">{props.title}<strong className="highlight-text">_</strong></h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TwoColNotes;