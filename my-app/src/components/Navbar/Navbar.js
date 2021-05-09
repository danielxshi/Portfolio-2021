import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        const menuClass = this.state.clicked ? 'nav-menu active' : 'nav-menu';
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
                        <ul className={menuClass}>
                            {MenuItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <Link className={item.cName} to={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                    </nav>
                </div>

            </header>
        )
    }
}

export default Navbar;