import GIT from '../images/icons/github-brands.svg';
import IG from '../images/icons/instagram-brands.svg';
import LinkedIn from '../images/icons/linkedin.svg';
import resume from '../images/danielshi-resume.pdf';

function Footer() {
  return (
    <footer>
        <div className="grid-container">
            <div className="max-bleed neu-footer">
                <div className="footer-container">
                    <div className="sub-container">
                        <div className="footer-cell footer-email-wrapper">
                            <h4 className="rel-margin-bot">Get in touch</h4>
                            <a className="secondary-cta" href="mailto:danielxshi@hotmail.com">danielxshi@hotmail.com</a>
                        </div>

                        <div className="footer-cell footer-frequent-links-wrapper">
                            <h4 className="rel-margin-bot">Documents</h4>
                            <ul>
                                <li>
                                    <a href={resume}>Resume</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-cell footer-social-media-wrapper">
                            <h4 className="rel-margin-bot">Social Media</h4>
                            <ul>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/danielxshi">
                                        <img height="30" width="30" src={GIT} alt="Github Icon"/>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/danielxshi/">
                                        <img height="30" width="30"src={IG}  alt="Instagram Icon"/>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-shi-0833501a0/">
                                        <img height="30" width="30"src={LinkedIn}  alt="Instagram Icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-cell footer-copyright">
                            <p className="copyright">Xiang Daniel Shi © 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
