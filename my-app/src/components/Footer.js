import GIT from '../images/icons/github-brands.png';
import IG from '../images/icons/instagram-brands.png';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Footer() {
  return (
    <footer >
        <div className="grid-container">
            <div className="footer-cell footer-email-wrapper">
                <p>Get in touch</p>
                <a className="secondary-cta" href="mailto:danielxshi@hotmail.com">danielxshi@hotmail.com</a>
            </div>

            <div className="footer-cell footer-frequent-links-wrapper">
                <p>Documents</p>
                <ul>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
                        <a href="resume.pdf">Resume</a>
                    </li>
                    <li>
                        <a href="style.html">Style Guide</a>
                    </li>
                    <li>
                        <a href="citations.html">Citations</a>
                    </li>
                </ul>
            </div>

            <div className="footer-cell footer-social-media-wrapper">
                <p>Social Media</p>
                <ul>
                    <li>
                        <a target="_blank" href="https://github.com/danielxshi">
                            <img height="30" width="30" src={GIT} alt="Github Icon"/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/danielxshi/">
                            <img height="30" width="30"src={IG}  alt="Instagram Icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-cell footer-copyright">
                <p className="copyright">Xiang Daniel Shi © 2020</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
