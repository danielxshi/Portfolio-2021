import React from 'react';

function AnchorEighty(props) {
    return (
        <section className="anch-80 sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="span-50">
                    <h2 className="text-grid-right rel-margin-bot">{props.title}<strong className="highlight-text">_</strong></h2>
                    <p className="text-grid-left">{props.text}</p>
                </div>
                <div className="img-fit gcs-9-4">
                    <img className="rel-margin-bot" src={props.img} alt={props.alt}/>
                    <p className="citation">{props.citation}</p>
                </div>
            </div>
        </section>
    );
}

export default AnchorEighty;