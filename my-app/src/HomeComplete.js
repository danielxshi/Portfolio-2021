import Home from './Home.js'
import DesktopNavbar from "./components/Navbar/DesktopNav";

import React, { useState } from 'react';

function HomeComplete() {
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(prev => !prev);
    };
    return(
        <div className="HomeComplete">
            <Home/>
            <DesktopNavbar onClick={openModal}/>
        </div>
    )
} export default HomeComplete;