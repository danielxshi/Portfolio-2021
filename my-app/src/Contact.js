import { gsap } from "gsap";
import React, { useEffect, useRef, Component} from 'react';

import GIT from './images/icons/github-brands.png';
import IG from './images/icons/instagram-brands.png';

const Contact = () => {
    
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.3,
            ease: "power3.out",
            y: 115,
            stagger: {
                amount: 0.15
            }
        })
    }, [line1, line2]);



      return (
        <main>
            <div className="intro-wrapper">
                <div className="grid-container">
                    <div className="max-col intro-text-banner">
                        <div class="p-identity">
                            <div className="line-wrap-1">

                                {/* Desktop */}

                                <h1 ref={el => line1 = el} className="text-banner">
                                    danielxshi@hotmail.com
                                </h1>
                            </div>
                            <div className=" line-wrap-2">
                                <p className="line-wrap" ref={el => line2 = el}>Xiang Daniel Shi</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-col media-links">
                        <li>
                            <a target="_blank" href="https://github.com/danielxshi">
                                <img height="30" width="30" src={GIT} alt="Github Icon"/>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/danielxshi/">
                                <img height="30" width="30"src={IG}  alt="Instagram Icon"/>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/danielxshi/">
                                <img height="30" width="30"src={IG}  alt="Instagram Icon"/>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </main>
      )
    }
 export default Contact;