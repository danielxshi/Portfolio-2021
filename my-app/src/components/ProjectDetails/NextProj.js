function NextProj(props) {
    return (
        <section className="next-proj sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="center-module">
                    <h2>Next project <strong className="highlight-text">_</strong></h2>
                </div>
                <div className="anchor-80-right">
                    <div className="img-fit">
                        <img src={props.img} alt={props.alt} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NextProj;
