import React from 'react';
import { Link } from "react-router-dom";

function NextProj(props) {
    return (
        <section className="next-proj sect-last sect-1">
            <div className="grid-row-space grid-container">
                <div className="center-module">
                    <h2>Next project <strong className="highlight-text">_</strong></h2>
                </div>
                <div className="anchor-80-right">
                    <div className="portfolio-item img-fit">
                        <Link className="portfolio-thumb" to={props.link} exact>
                            <img src={props.img} alt={props.alt} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NextProj;
