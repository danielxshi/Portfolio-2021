import logo from './logo.svg';
import './style/App.css';
import projectMessages from './components/ProjectMessages.js'
import bosstepBanner from './images/bosstep-banner-2048x768.jpg';
import cliqBanner from './images/cliq/cliq-banner-2048x768.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Project from "./Project";
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
        <Header/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
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


        {/* <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/bosstep" >
              <Project messages={projectMessages.bosstep} banner={bosstepBanner} />
            </Route>
            <Route exact path="/cliq" >
              <Project messages={projectMessages.cliq} banner={cliqBanner} />
            </Route>
        </Switch> */}

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
