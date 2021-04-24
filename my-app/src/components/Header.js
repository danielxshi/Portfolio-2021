import '../style/App.css';
import '../style/grid.css';
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

{/* <a href="" className="secondary-btn">
<Link to='/bosstep'>
    View Process
</Link>
</a>
 */}

function Header() {
  return (
    <header>
        <div className="desktop-nav-container">
            <nav className="grid-container">
                <div className="nav-logo">
                    <Link to="/">
                        XIANG SHI
                    </Link>
                </div>
                
                <ul className="cover nav-grid">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Photo/Video
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
