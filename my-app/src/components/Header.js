import '../style/App.css';
import '../style/grid.css';
import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <header>
        <div className="desktop-nav-container">
            <nav className="grid-container">
                <div className="nav-logo">
                    <Link to="/" exact>
                        XIANG SHI
                    </Link>
                </div>
                
                <ul className="cover nav-grid">
                    <li>
                        <NavLink activeClassName="active" to="/" exact>
                            Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/photo">
                            Photo/Video
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
