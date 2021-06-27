import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    // if this clicked and menu is open then set menu to false 

    render() {
        return(
            <header>
                <div className="nav-container mobile-nav">
                    <nav className="grid-container">
                        <div className="nav-logo">
                            <Link>XIANG</Link>
                        </div>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <Link 
                                            onClick={this.handleClick} 
                                            to={"/" +item.href} 
                                            href={item.href} 
                                            smooth={true} 
                                            spy={true} 
                                            activeClassName="active" 
                                            className={item.cName}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}

                        <a className="contactModal" onClick={this.props.onClick}>CONTACT</a>
                        </ul>

                    </nav>
                </div>

            </header>
        )
    }
}

export default Navbar;