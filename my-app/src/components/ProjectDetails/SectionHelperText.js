function SectionHelperText(props) {
    return (
        <section className="sect-helper sect-helper-text sect-1 sect-last">
            <div className="grid-container grid-row-space">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <h2 className="span-2">{props.title}<strong className="highlight-text">_</strong></h2>
                            <p className="rel-margin-bot anchor-right-sect-helper">{props.text}</p>
                            <p className="end-col-text"><strong className="highlight-text">
                                {props.sectionChapterCurrent}</strong>|
                                <strong>{props.sectionChapterTotal}</strong>
                            </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionHelperText;
