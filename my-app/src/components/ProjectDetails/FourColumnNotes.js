import React from 'react';

function FourColumnNotes(props) {
    return (
        <section className="mod-4-col-notes sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="max-col">
                    <div className="rel-margin-bot sub-container grid-col-space">
                        <div className="span-3 img-fit">
                            <img src={props.img1} alt={props.alt}/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={props.img2} alt={props.alt}/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={props.img3} alt={props.alt}/>
                        </div>
                        <div className="span-3 img-fit">
                            <img src={props.img4} alt={props.alt}/>
                        </div>
                    </div>
                    <p className="citation">{props.citation}</p>
                </div>
                <div className="max-col">
                    <div className="sub-container grid-col-space">
                        <p className="paragraph-anchor-left">{props.text}</p>
                        <h2 className="h2-anchor-right">{props.title}<strong className="highlight-text">_</strong></h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FourColumnNotes;