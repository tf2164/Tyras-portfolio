// src/components/Navbar.js
import './comp.css';
import React from "react";
import coding from "./assets/code-icon.png"
// import { Link } from 'react-scroll';
import installicon from './assets/install-icon.png';
import resumePDF from './assets/SWE-Tyra-Fair..pdf';

export default function Navbar() {
return (
  <>
    <header className="header">
      <div className="nav-buttons-container">
        <nav>
          <div className='name'>
            <h1 >Tyra Fair</h1>
            <img src={coding} alt="accent" />
          </div>

          <a href={resumePDF} download className="nav-buttons">
            Resume
            <img src={installicon} alt='install-resume'></img>
          </a>
       
        </nav>
      </div>
    </header>
  </>
);
}