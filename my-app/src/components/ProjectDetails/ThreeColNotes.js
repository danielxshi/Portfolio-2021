import React from 'react';

function ThreeColNotes(props) {
    return(
        <section className="sketch-sect sect-last sect-1">
        <div className="grid-row-space grid-container">
            <div className="proj-col-contain">
                <div className="sub-container grid-col-space rel-margin-bot">
                    <div className="span-4 img-contain">
                        <img src={props.img1} alt="props.alt1"/>
                    </div>
                    <div className="span-4 img-contain">
                        <img src={props.img2} alt="props.alt2"/>
                    </div>
                    <div className="span-4 img-contain">
                        <img src={props.img3} alt="props.alt3"/>
                    </div>
                </div>
                <p className="citation">{props.citation}</p>
            </div>
            <div className="proj-col-contain">
                <div className="sub-container grid-col-space">
                    <p className="text-grid-right">{props.text}</p>
                    <h3 className="text-grid-left">{props.title}</h3>
                </div>
            </div>
        </div>
        </section>
    );

} export default ThreeColNotes;