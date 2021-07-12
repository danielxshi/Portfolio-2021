// Import styles
import './style/App.scss';
import './style/global.scss';

import React, { useState } from 'react';
import styled from 'styled-components';


import { ContactModal } from './components/ContactModal';

import DesktopNav from './components/Navbar/DesktopNav'

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
import DesktopProjectCard from './components/Home/DesktopProjectCard';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
        <DesktopNav onClick={openModal}/>
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
                  <Project 
                    demo={"https://danielxshi.github.io/IAT334-Bosstep-r1/"} 
                    mobileBannerContainer={"project-details-hero-mobile bosstep-mobile-container"} 
                    bannerBG={"hero-banner-mobile-bosstep hero-banner-mobile"} 
                    messages={projectMessages.bosstep} 
                    mobileBannerDemo={mobileBannerDemo} 
                    banner={bosstepBanner} />
                  <Bosstep/>
                </Route>
                <Route path="/cliq" >
                  <Project 
                    demo={"https://danielxshi.github.io/IAT-339-Ecommerce-Website/"} 
                    mobileBannerContainer={"project-details-hero-mobile cliq-mobile-container"} 
                    bannerBG={"hero-banner-mobile-cliq hero-banner-mobile"} 
                    messages={projectMessages.cliq} 
                    mobileBannerDemo={mobileCliqBanner} 
                    banner={cliqBanner} />
                  <Cliq/>
                </Route>
                <Route exact path="/track" >
                  <Project 
                    mobileBannerContainer={"project-details-hero-mobile track-mobile-container"} 
                    bannerBG={"hero-banner-mobile-track hero-banner-mobile"} 
                    messages={projectMessages.track} 
                    banner={momentBanner} 
                    demo={"https://www.figma.com/file/lVKPTixE6X9AJEHQOGAI6u/MomentTrack_FinalInteractivePrototype?node-id=0%3A1"}
                    clientCheck={"Client"}
                    />
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
      <Route exact path="/">
        <Footer/>
      </Route>
    </HashRouter>
  );
}

export default App;
