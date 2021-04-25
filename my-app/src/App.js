import logo from './logo.svg';
import './style/App.css';
import projectMessages from './components/ProjectMessages.js'
import bosstepBanner from './images/bosstep-banner-2048x768.jpg';
import cliqBanner from './images/cliq/cliq-banner-2048x768.png';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Project from "./Project";

import React, {useRef, useEffect} from 'react';

// import locomotiveScroll from "locomotive-scroll";
// import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //     const scroll = new locomotiveScroll({
  //         el: scrollRef.current,
  //         smooth: true
  //     });
  // });

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/bosstep" >
              <Project messages={projectMessages.bosstep} banner={bosstepBanner} />
            </Route>
            <Route exact path="/cliq" >
              <Project messages={projectMessages.cliq} banner={cliqBanner} />
            </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
