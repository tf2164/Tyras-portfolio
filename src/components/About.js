import './comp.css';

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="background-about">
        <div className="hero-img"  style={{ backgroundImage: "url(/coding.jpeg)"  }}    alt="hero">
          <h1 className="title-font">
            Hi, I'm Tyra
            <br className="description" />I love to build amazing
            apps.
          </h1>
          <p className="caption-hero">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>

<div className="nav-main-buttons">
            <a
              href="#contact"
              className="nav-main-left">
              Work With Me
            </a>
            <a
              href="#projects"
              className="nav-main-right">
              See My Past Work
            </a>
          </div>
        </div>
  
        </div>

    
      </div>
    </section>
  );
}