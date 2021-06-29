import React from 'react';
import { Link } from "react-router-dom";

function NextProj(props) {
    return (
        <section className="next-proj sect-last">
            <div className="grid-row-space grid-container">
                <div className="center-module">
                    <h3>Next project</h3>
                    <div className="underline-container otr-divider-col">
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="anchor-80-right">
                    <div className="portfolio-item img-fit">
                        <Link className="portfolio-thumb" to={props.link} exact>
                            <img loading="lazy" src={props.img} alt={props.alt} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NextProj;
