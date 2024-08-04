// src/components/Navbar.js
import './comp.css';
import React from "react";
import coding from "./assets/code-icon.png"
import { Link } from 'react-scroll';
// import installicon from './assets/install-icon.png';

export default function Navbar() {
  return (
    <header className="header">
      <div className="nav-buttons-container">
        <nav>

<div className='name'>
          <h1 >Tyra Fair</h1>
          <img src={coding} alt="accent" />
          </div>
        
          <Link className="nav-buttons"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset if you have a fixed header
            duration={800} >
  
            Past Work </Link>


            <div className='resume-container'>
            {/* <a href="./assets/Tyra Fair swe intern.pdf" download className="nav-buttons">Resume<img src={installicon}></img></a> */}
            </div>

            <Link className="nav-buttons" > Mobile Apps </Link>
            <Link className="nav-buttons" > Games </Link>
            
        </nav>
         

         
        </div>
      
    </header>
  );
}