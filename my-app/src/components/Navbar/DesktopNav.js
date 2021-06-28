import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Button.scss'
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import { TweenLite, TimelineLite } from 'gsap' // or import TweenMax from 'gsap/TweenMax'

class DesktopNav extends Component {
    constructor(props){
        super(props);
        this.myTween = new TimelineLite({paused: true});
        this.myElements = [];
        this.myElement = null;
      }
    
      componentDidMount(){
        // use the node ref to create the animation
        this.myTween.from(this.myElements, 1, {y: -50}, 1)
        this.myTween.to(this.myElements, 0.95, {x: 0, autoAlpha: 1}, 1)
        this.myTween.from(this.myElement, 1, {y: -50}, 1)
        this.myTween.to(this.myElement, 0.5, {x: 0, autoAlpha: 1}, 1)
        .play();
      }
    
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <header>
                <nav 
                    className="desktop-nav nav-grid-template"
                >
                    <div className="vertical-desktop-nav-container">
                        <div className="vertical-nav-content">
                            <div id="nav-logo" className="overflow-wrap">
                                <NavLink activeClassName="active" exact to="/">XIANG</NavLink>
                            </div>
                            <div className="menu-icon" onClick={this.handleClick}>
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu '}>
                                {MenuItems.map((item, index) => {
                                    return(
                                        <li className ="overflow-wrap underscore-cta " key={index}>
                                            <Link
                                                ref={li => this.myElements[index] = li}
                                                to={"/" +item.href} 
                                                href={item.href} smooth={true} 
                                                spy={true}  
                                                className={item.cName}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            <div className="contactModal">
                                <div className="overflow-wrap">
                                <a ref={div => this.myElement = div} id="contactCTA" onClick={this.props.onClick}>CONTACT</a>

                                </div>
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