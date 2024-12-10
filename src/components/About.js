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
          I am a passionate and dedicated Software Engineer with significant hands-on experience gained through an impactful apprenticeship 
          and a data-focused role at Capital One. 
          My apprenticeship at Road to Hire provided me with a strong foundation in 
          full stack development through six months of intensive, hands-on projects. 
          This blend of practical experience and my educational pursuits, sets me apart from candidates who have 
           only academic experience. My diverse skill set and proven ability to apply
            knowledge in real-world settings make me a strong fit for an entry-level 
            software engineering role, where I can contribute effectively and grow
             within the team.
          </p>
          <br></br>

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