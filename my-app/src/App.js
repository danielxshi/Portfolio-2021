// Import styles
import './style/App.scss';
import './style/global.scss';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ContactModal } from './components/ContactModal';
import { GlobalStyle } from './components/globalStyles';

// Import Messages
import projectMessages from './components/ProjectMessages.js'

//Import placeholder
import img3x4 from './images/placeholder/placeholder-3x4.png'

// Import images
import bosstepBanner from './images/bosstep-banner-2048x768.webp';
import cliqBanner from './images/cliq/cliq-banner-2048x768.webp';
import momentBanner from './images/track/moment-banner-2048x768.png';
import mobileBannerDemo from './images/bosstep/mobile-banner-demo.png';
import mobileCliqBanner from './images/cliq-1000x600.webp';

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

import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";


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
    <HashRouter>

    <ContactModal showModal={showModal} setShowModal={setShowModal} />
      <div className="App">
        <ScrollToTop/>
        <Navbar onClick={openModal}/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
            key={location.pathname}
            timeout={800}
            classNames="fade"
            unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/bosstep" >
                  <Project mobileBannerContainer={"project-details-hero-mobile bosstep-mobile-container"} bannerBG={"hero-banner-mobile-bosstep hero-banner-mobile"} messages={projectMessages.bosstep} mobileBannerDemo={mobileBannerDemo} banner={bosstepBanner} />
                  <Bosstep/>
                </Route>
                <Route path="/cliq" >
                  <Project mobileBannerContainer={"project-details-hero-mobile cliq-mobile-container"} bannerBG={"hero-banner-mobile-cliq hero-banner-mobile"} messages={projectMessages.cliq} mobileBannerDemo={mobileCliqBanner} banner={cliqBanner} />
                  <Cliq/>
                </Route>
                <Route exact path="/track" >
                  <Project mobileBannerContainer={"project-details-hero-mobile track-mobile-container"} bannerBG={"hero-banner-mobile-track hero-banner-mobile"} messages={projectMessages.cliq} banner={momentBanner} />
                  <MomentTrack/>
                </Route>
                <Route path="*">
                  <Home/>
                </Route>
              </Switch> 
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </div>
      <Footer/>
    </HashRouter>
  );
}

export default App;
