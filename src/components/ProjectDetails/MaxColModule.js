import React from 'react';

function MaxColModule(props) {
    return (
        <section className="module-max-col sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="proj-col-contain img-fit">
                    <img loading="lazy" src={props.img} alt={props.alt}/>
                    <p className="citation">{props.citation}</p>
                </div>
                <div className="proj-col-contain">
                    <div className="sub-container grid-col-space">
                        <h3 className="anchor-left-subheader">{props.title}</h3>
                        <div className="anchor-80-right">
                            <p className="rel-margin-bot">{props.p1}</p>
                            <p>{props.p2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MaxColModule;