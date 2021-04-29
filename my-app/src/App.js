import logo from './logo.svg';
import './style/App.scss';
import './style/global.scss';
import projectMessages from './components/ProjectMessages.js'
import bosstepBanner from './images/bosstep-banner-2048x768.jpg';
import cliqBanner from './images/cliq/cliq-banner-2048x768.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Project from "./Project";
import ScrollToTop from "./components/ScrollToTop";
import{
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import React, {useRef, useEffect} from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Header/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={800}
            classNames="fade"
            unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/bosstep" >
                  <Project messages={projectMessages.bosstep} banner={bosstepBanner} />
                </Route>
                <Route exact path="/cliq" >
                  <Project messages={projectMessages.cliq} banner={cliqBanner} />
                </Route>
              </Switch> 
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
