import React from 'react';
import ReactDOM from 'react-dom';

function SectionHelperGraphic(props) {
    return (
        <section className="sect-helper sect-helper-graphic sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col-proj-details">
                    <div className="sub-container grid-col-space">
                        <div className="span-3">
                            <div className="img-contain">
                                <img src={props.graphic} alt={props.alt} />
                            </div>
                        </div>
                        <div className="anchor-right-sect-helper">
                            <h2 className="rel-margin-bot">{props.title}<strong className="highlight-text">_</strong></h2>
                            <p className="rel-margin-bot">{props.text}</p>
                            <p className="end-col-text">
                                <strong className="highlight-text">
                                    {props.sectionChapterCurrent}
                                </strong>|
                                <strong>
                                    {props.sectionChapterTotal}
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionHelperGraphic;
