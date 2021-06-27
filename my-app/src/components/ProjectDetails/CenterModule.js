import React from 'react';

function CenterModule(props) {
    return (
        <section className="project-details-center-section sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="center-module ">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <p><strong>{props.org}</strong></p>
                    <a target="_blank" href={props.href} rel="noopener noreferrer" className="primary-btn black-border-btn">
                        {props.btnTitle}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CenterModule;