import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <header>
                <div className="desktop-nav-container">
                    <nav className="grid-container">
                        <div className="nav-logo">
                            <Link to="/">XIANG</Link>
                        </div>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <NavLink exact path={item.url} activeClassName="active" className={item.cName} to={item.url}>
                                            {item.title}
                                        </NavLink>
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