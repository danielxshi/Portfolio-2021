// Import styles
import './style/App.scss';
import './style/global.scss';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import { GlobalStyle } from './components/globalStyles';

// Import Messages
import projectMessages from './components/ProjectMessages.js'

// Import images
import bosstepBanner from './images/bosstep-banner-2048x768.jpg';
import cliqBanner from './images/cliq/cliq-banner-2048x768.png';
import momentBanner from './images/track/moment-banner-2048x768.png';
// Import mobile images - hero banner - bosstep
import mobileBannerBG from './images/bosstep/mobile-banner-bosstep.png';
import mobileBannerDemo from './images/bosstep/mobile-banner-demo.png';

// Import components
import Footer from "./components/Footer";
import Home from "./Home";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar.js";

// Import Pages
import Bosstep from "./Bosstep.js";
import Cliq from './Cliq.js';
import MomentTrack from './MomentTrack.js';


// Import Animation
import{
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <Router>

    <Modal showModal={showModal} setShowModal={setShowModal} />
    {/* <GlobalStyle /> */}
      <div className="App">
        <ScrollToTop/>
        <Navbar onClick={openModal}/>
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
                  <Project messages={projectMessages.bosstep} mobileBannerDemo={mobileBannerDemo} bannerMobile={mobileBannerBG} banner={bosstepBanner} />
                  <Bosstep/>
                </Route>
                <Route exact path="/cliq" >
                  <Project messages={projectMessages.cliq} banner={cliqBanner} />
                  <Cliq/>
                </Route>
                <Route exact path="/track" >
                  <Project messages={projectMessages.cliq} banner={momentBanner} />
                  <MomentTrack/>
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
