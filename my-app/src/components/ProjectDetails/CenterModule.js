function CenterModule(props) {
    return (
        <section className="team-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <h2 className="h2-anchor-left rel-margin-bot">{props.title} <strong className="highlight-text">_</strong></h2>
                <div className="center-module ">
                    <p className="rel-margin-bot">{props.text}</p>
                    <p className="rel-margin-bot"><strong>{props.org}</strong></p>
                    <a href={props.href} className="primary-btn black-border-btn">
                        {props.btnTitle}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CenterModule;