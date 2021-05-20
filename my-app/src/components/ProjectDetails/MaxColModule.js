function MaxColModule(props) {
    return (
        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col img-fit">
                    <img src={props.img} alt={props.alt}/>
                    <p className="citation">{props.citation}</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="anchor-left-subheader">{props.title}<strong className="highlight-text">_</strong></h2>
                        <div className="anchor-80-right">
                            <p>{props.p1}</p>
                            <p>{props.p2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MaxColModule;