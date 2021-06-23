import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Button.scss'
import { HashLink as Link } from 'react-router-hash-link';


class DesktopNav extends Component {
    
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <header>
                <nav className="desktop-nav nav-grid-template">
                    <div className="vertical-desktop-nav-container">
                        <div className="vertical-nav-content">
                            <div id="nav-logo">
                                <Link to="/">XIANG</Link>
                            </div>
                            <div className="menu-icon" onClick={this.handleClick}>
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                {MenuItems.map((item, index) => {
                                    return(
                                        <li className ="underscore-cta" key={index}>
                                            <Link to={item.href} activeClassName="active" className={item.cName}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            <div className="contactModal">
                                <a onClick={this.props.onClick}>CONTACT</a>
                            </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default DesktopNav;