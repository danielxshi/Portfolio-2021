import React from 'react';

function ModFullContainerGraphic(props) {
    return (
        <section className="sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="proj-col-contain img-fit">
                    <img loading="lazy" src={props.img} alt={props.alt}/>
                    <p className="citation">{props.citation}</p>
                </div>
            </div>
        </section>
    );
}

export default ModFullContainerGraphic;