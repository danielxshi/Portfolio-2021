function FiftySplit(props) {
    return (
        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="img-fit span-50">
                            <img className="rel-margin-bot" src={props.img} alt={props.alt}/>
                            <p className="citation">{props.citation}</p>
                        </div>
                        <div className="gcs-8-5">
                            <h2 className="rel-margin-bot">{props.heading}<strong class="highlight-text">_</strong></h2>
                            <p className="paragraph-anchor-left rel-margin-bot">{props.paragraphOne}</p>
                            <p className="paragraph-anchor-left">{props.paragraphTwo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FiftySplit;