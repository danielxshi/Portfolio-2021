import React from 'react';

function ModuleFiftySplit(props) {
    return (
        <section className="mod-50 sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <div className="img-fit span-50">
                            <img src={props.img} alt={props.alt}/>
                            <p className="citation">{props.citation}</p>
                        </div>
                        <div className="gcs-8-5">
                            <h3>{props.title}<strong className="highlight-text">_</strong></h3>
                            <p className="text-grid-left rel-margin-bot">{props.p1}</p>
                            <p className="text-grid-left">{props.p2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModuleFiftySplit;