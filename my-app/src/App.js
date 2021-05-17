// Import styles
import './style/App.scss';
import './style/global.scss';

// Import Messages
import projectMessages from './components/ProjectMessages.js'

// Import images
import bosstepBanner from './images/bosstep-banner-2048x768.jpg';
import cliqBanner from './images/cliq/cliq-banner-2048x768.png';
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


// Import Animation
import{
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Navbar/>
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
