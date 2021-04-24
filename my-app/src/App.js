import logo from './logo.svg';
import './style/App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Bosstep from "./Bosstep";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bosstep" component={Bosstep} />

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
