import React from 'react';

function ModuleFiftyGRight(props) {
    return (
        <section className="mod-50 sect-1 sect-last">
            <div className="grid-row-space grid-container">
                <div className="proj-col-contain">
                    <div className="sub-container grid-col-space">
                        <div className="span-50">
                            <h3 className="rel-margin-bot">{props.title}</h3>
                            <p className="text-grid-left rel-margin-bot">{props.p1}</p>
                            <p className="text-grid-left">{props.p2}</p>
                        </div>
                        <div className="img-fit gcs-8-5">
                            <img src={props.img} alt={props.alt}/>
                            <p className="citation">{props.citation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ModuleFiftyGRight;