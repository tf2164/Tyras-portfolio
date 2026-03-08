import React, { useState } from 'react';
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import './App.css';
// import DarkModeToggle from './dark-mode/DarkModeToggle';
// import Chatbot from "react-chatbot-kit";
// import ActionProvider from "./components/chatbot/ActionProvider";
// import MessageParser from "./components/chatbot/MessageParser";
// import config from "./components/chatbot/config";
// import user from "./components/assets/user.png";
// import chat from "./components/assets/chat.png";

import WebProjects from './components/webapp-profile/WebProjects';
import MobileProjects from './components/mobileapp-profile/MobileProjects';
import GameProjects from './components/games-profile/Games';
import WebSkills from './components/webapp-profile/WebSkills';
import MobileSkills from './components/mobileapp-profile/MobileSkills';
import GameSkills from './components/games-profile/GameSkills';


function App() {

  const [category, setCategory] = useState('web');

  const [activeSection, setActiveSection] = useState('section2');
  // const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsSidebarOpen(false);
  };

  // const toggleChatbot = () => {
  //   setIsChatbotOpen(!isChatbotOpen);
  // };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const projectsByCategory = {
    web: <WebProjects />,
    mobile: <MobileProjects />,
    games: <GameProjects />,
  };

  const skillsByCategory = {
    web: <WebSkills />,
    mobile: <MobileSkills />,
    games: <GameSkills />,
  };

  const getCardClass = (sectionId, baseClass) => (
    `bento-card ${baseClass} ${activeSection === sectionId ? 'is-focused' : ''}`
  );
  

  return (
    <main className="main-container">
      <div id="combine-slider">
        <Navbar />
        {/* <DarkModeToggle /> */}
      </div>

      <aside className={`navside ${isSidebarOpen ? 'visible' : ''}`}>
        <div className="sidebar-shell">
          <div className="sidebar">
            <ul className="sidebar-links">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('section1')}
                  className={activeSection === 'section1' ? 'is-current' : ''}
                >
                  Bio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('section2')}
                  className={activeSection === 'section2' ? 'is-current' : ''}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('section3')}
                  className={activeSection === 'section3' ? 'is-current' : ''}
                >
                  Skills
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* <button
        className={`sidebar-toggle-btn ${isSidebarOpen ? 'is-open' : ''}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isSidebarOpen}
      >
        <span className="menu-icon" aria-hidden="true">
          <span className="bar bar-top" />
          <span className="bar bar-middle" />
          <span className="bar bar-bottom" />
        </span>
      </button> */}

      <div className={`content ${isSidebarOpen ? 'is-shifted' : ''}`}>
        <div className="bento-layout">
          <section id="section1" className={getCardClass('section1', 'bento-about')}>
            <About category={category} onCategoryChange={setCategory} />
          </section>

          <section id="section2" className={getCardClass('section2', 'bento-projects')}>
            {projectsByCategory[category]}
          </section>

          <section id="section3" className={getCardClass('section3', 'bento-skills')}>
            {skillsByCategory[category]}
          </section>
        </div>
      </div>

      {/* <aside className='chatbot-positioning'>
        {isChatbotOpen && (
          <div className="custom-chatbot-wrapper">
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              profileAvatar={user}
            />
          </div>
        )}
        <button className="chat-toggle" onClick={toggleChatbot}>
          <img src={chat} alt="chat-icon" />
        </button>
      </aside> */}
    </main>
  );
}

export default App;

