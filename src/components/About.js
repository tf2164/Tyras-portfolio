import './comp.css';
import React from 'react';
import ProfileDropdown from './profile-selector.js';

export default function About({ category, onCategoryChange }) {
  // Enable smooth scrolling for anchor links
  React.useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const buttons = document.querySelectorAll('.nav-main-buttons a');
    buttons.forEach(btn => btn.addEventListener('click', handleClick));
    return () => {
      buttons.forEach(btn => btn.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className='sections'>
      <section id="about">
        <div className="about-container">
          <div className="background-about">
            <div className="hero-img" style={{ backgroundImage: "url(/coding.jpeg)" }}>
              <h1 className="title-font">
                Hi, I'm Tyra
                <br className="description" />I love to build amazing

            <span className="profile-dropdown">
                <ProfileDropdown value={category} onChange={onCategoryChange} />.
               </span>
              </h1>
              <p className="caption-hero">
                Western Governors University Software Engineering graduate with hands-on experience in full 
                stack development through Road to Hire and data work at Capital One. I build
                real-world applications and, in my free time, design and develop video games 
                that combine creativity with technical problem-solving.

              </p>
              <br />
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
    </div>
  );
}