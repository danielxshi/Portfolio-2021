// Import styles
import './style/App.scss';
import './style/global.scss';
import React, { useState } from 'react';
import { ContactModal } from './components/ContactModal';
import { GlobalStyle } from './components/globalStyles';

// Import Messages
import projectMessages from './components/ProjectMessages.js'


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
import DesktopNavbar from "./components/Navbar/DesktopNav";

// testing
import HomeComplete from './HomeComplete';

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
        <Route exact path="/">
          <DesktopNavbar onClick={openModal}/> 
        </Route>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
            key={location.pathname}
            timeout={800}
            classNames="fade"
            unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/bosstep" >
                  <Project demo={"https://danielxshi.github.io/IAT334-Bosstep-r1/"} mobileBannerContainer={"project-details-hero-mobile bosstep-mobile-container"} bannerBG={"hero-banner-mobile-bosstep hero-banner-mobile"} messages={projectMessages.bosstep} mobileBannerDemo={mobileBannerDemo} banner={bosstepBanner} />
                  <Bosstep/>
                </Route>
                <Route path="/cliq" >
                  <Project demo={"https://danielxshi.github.io/IAT-339-Ecommerce-Website/"} mobileBannerContainer={"project-details-hero-mobile cliq-mobile-container"} bannerBG={"hero-banner-mobile-cliq hero-banner-mobile"} messages={projectMessages.cliq} mobileBannerDemo={mobileCliqBanner} banner={cliqBanner} />
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
