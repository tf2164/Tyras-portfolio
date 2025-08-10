import React, { useState } from 'react';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import { DarkModeProvider } from './Dark mode/DarkModeContext.js';
// import DarkModeToggle from './Dark mode/DarkModeToggle';
// import Chatbot from "react-chatbot-kit";
// import ActionProvider from "./components/chatbot/ActionProvider";
// import MessageParser from "./components/chatbot/MessageParser";
// import config from "./components/chatbot/config";
// import user from "./components/assets/user.png";
// import chat from "./components/assets/chat.png";
import '../src/index.css';

import WebProjects from './components/webapp-profile/WebProjects';
import MobileProjects from './components/mobileapp-profile/MobileProjects';
import GameProjects from './components/games-profile/Games';
import WebSkills from './components/webapp-profile/WebSkills';
import MobileSkills from './components/mobileapp-profile/MobileSkills';
import GameSkills from './components/games-profile/GameSkills';


function App() {

    const [category, setCategory] = useState('web');

  const [activeSection, setActiveSection] = useState('section1');
  // const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to the section with id `sectionId` if it exists
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const toggleChatbot = () => {
  //   setIsChatbotOpen(!isChatbotOpen);
  // };

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <DarkModeProvider>
      <main className="main-container">
        <div id="combine-slider">
          <Navbar />
          {/* <DarkModeToggle /> */}
        </div>

        <div
          className={`navside ${isSidebarOpen ? 'visible' : 'hidden'}`}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100%',
            width: '220px',
            background: '#222',
            transition: 'transform 0.3s ease',
            zIndex: 1000,
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)'
          }}
        >
          <div className="sidebar">
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li onClick={() => handleNavigation('section1')}>About</li>
              <li onClick={() => handleNavigation('section2')}>Projects</li>
              <li onClick={() => handleNavigation('section3')}>Skills</li>
              <li onClick={() => handleNavigation('section4')}>Work with me</li>
            </ul>
          </div>
        </div>

        <button
          className="sidebar-toggle-btn"
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: '20px',
            right: isSidebarOpen ? '230px' : '20px',
            zIndex: 1100,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Hamburger menu icon */}
          <span
            style={{
              display: 'inline-block',
              width: '30px',
              height: '22px',
              position: 'relative'
            }}
          >
            <span
              style={{
                position: 'absolute',
                height: '4px',
                width: '100%',
                background: '#fff',
                borderRadius: '2px',
                transition: '0.3s',
                top: isSidebarOpen ? '9px' : '0',
                transform: isSidebarOpen ? 'rotate(45deg)' : 'none'
              }}
            />
            <span
              style={{
                position: 'absolute',
                height: '4px',
                width: '100%',
                background: '#fff',
                borderRadius: '2px',
                transition: '0.3s',
                top: '9px',
                opacity: isSidebarOpen ? 0 : 1
              }}
            />
            <span
              style={{
                position: 'absolute',
                height: '4px',
                width: '100%',
                background: '#fff',
                borderRadius: '2px',
                transition: '0.3s',
                top: isSidebarOpen ? '9px' : '18px',
                transform: isSidebarOpen ? 'rotate(-45deg)' : 'none'
              }}
            />
          </span>
        </button>

        <div className="content" style={{ marginRight: isSidebarOpen ? '220px' : '0', transition: 'margin-right 0.3s ease' }}>
          
          <div id="section1" className={activeSection === 'section1' ? 'active' : 'hidden'}> 
              <About  category={category} onCategoryChange={setCategory} />
          </div>
          <div id="section2" className={activeSection === 'section2' ? 'active' : 'hidden'}>
        {category === 'web' && <WebProjects />}
        {category === 'mobile' && <MobileProjects />}
        {category === 'games' && <GameProjects />}
          </div>
          <div id="section3" className={activeSection === 'section3' ? 'active' : 'hidden'}>
        {category === 'web' && <WebSkills />}
        {category === 'mobile' && <MobileSkills />}
        {category === 'games' && <GameSkills />}
          </div>
          <div id="section4" className={activeSection === 'section4' ? 'active' : 'hidden'}>
            <Contact />
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
     
    </DarkModeProvider>
  );
}

export default App;

