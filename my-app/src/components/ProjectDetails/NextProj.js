function NextProj(props) {
    return (
        <section className="next-proj sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <h2 className="anchor-80-right">Next project <strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
                <div className="anchor-80-right">
                    <div className="sub-container">
                        <div className="anchor-80-right">
                            <div className="img-fit">
                                {/* <img src={img2x1} alt="" /> */}
                                <img src={props.img} alt={props.alt} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default NextProj;
