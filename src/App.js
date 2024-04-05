import React, { useState } from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Skills from './components/Skills.js';
import { DarkModeProvider } from './Dark mode/DarkModeContext.js';
import DarkModeToggle from './Dark mode/DarkModeToggle';
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import config from "./components/chatbot/config";
import user from "./components/assets/user.png";
import chat from "./components/assets/chat.png";
import '../src/index.css';

function App() {
  const [activeSection, setActiveSection] = useState('section1');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to the section with id `sectionId`
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <DarkModeProvider>
      <main className="main-container">
        <div id="combine-slider">
          <Navbar />
          <DarkModeToggle />
        </div>

        <div className={`navside ${isSidebarOpen ? 'visible' : 'hidden'}`}>
        <div className="sidebar">
          <ul style={{ listStyleType: 'none' }}>
            <li onClick={() => handleNavigation('section1')}>About</li>
            <li onClick={() => handleNavigation('section2')}>Projects</li>
            <li onClick={() => handleNavigation('section3')}>Skills</li>
            <li onClick={() => handleNavigation('section4')}>Work with me</li>
          </ul>
        </div>
      </div>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
  

          <div className="content">
            <div id="section1" className={activeSection === 'section1' ? 'active' : 'hidden'}>
              <About />
            </div>
            <div id="section2" className={activeSection === 'section2' ? 'active' : 'hidden'}>
              <Projects />
            </div>
            <div id="section3" className={activeSection === 'section3' ? 'active' : 'hidden'}>
            </div>
            <div id="section4" className={activeSection === 'section4' ? 'active' : 'hidden'}>
              <Skills />
              <Contact />
            </div>
          </div>
       

        <aside className='chatbot-positioning'>
          {isChatbotOpen && (
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              profileAvatar={user}
            />
          )}
          <button className="chat-toggle" onClick={toggleChatbot}>
            <img src={chat} alt="chat-icon" />
          </button>
        </aside>
      </main>
    </DarkModeProvider>
  );
}

export default App;


// import './App.css';
// import './index.css';
// import React, { useState } from "react";
// import About from "./components/About.js";
// import Contact from "./components/Contact.js";
// import Navbar from "./components/Navbar.js";
// import Projects from "./components/Projects.js";
// import Skills from './components/Skills.js';
// // import Skills from "./components/Skills";
// import { DarkModeProvider } from './Dark mode/DarkModeContext.js'
// import DarkModeToggle from './Dark mode/DarkModeToggle';
// // import Chatbot from './components/chatbot/chatbot.js';
// import Chatbot from "react-chatbot-kit";

// import ActionProvider from "./components/chatbot/ActionProvider";
// import MessageParser from "./components/chatbot/MessageParser";
// import config from "./components/chatbot/config";

// function App() {

//   const [activeSection, setActiveSection] = useState('section1');

//   const handleNavigation = (sectionId) => {
//     setActiveSection(sectionId);
//     // Scroll to the section with id `sectionId`
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <DarkModeProvider>
//     <main className="main-container">
//       <div id="combine-slider">
// <Navbar /><DarkModeToggle />
// </div>

//     <div>
//       <div className="sidebar">
//         <ul style={{ listStyleType: 'none' }}>
//           <li onClick={() => handleNavigation('section1')}>About</li>
//           <li onClick={() => handleNavigation('section2')}>Projects</li>
//           <li onClick={() => handleNavigation('section3')}>Skills</li>
//           <li onClick={() => handleNavigation('section4')}>Work with me</li>

//         </ul>
//       </div>

//       <div className="content">
//         <div id="section1" className={activeSection === 'section1' ? 'active' : 'hidden'}>
//           {<About />}
//         </div>
//         <div id="section2" className={activeSection === 'section2' ? 'active' : 'hidden'}>
//           {/* Content for Section 2 */}
//         </div>
//         <div id="section3" className={activeSection === 'section3' ? 'active' : 'hidden'}>
//           {<Projects />}
//         </div>
//         <div id="section4" className={activeSection === 'section4' ? 'active' : 'hidden'}>
//         {<Skills />}
//         {<Contact />}
//         </div>
//       </div>
//     </div>

// <aside className='chatbot-positioning'>
// <Chatbot
//           config={config}
//           actionProvider={ActionProvider}
//           messageParser={MessageParser}
//         />
// </aside>

//     </main>
//     </DarkModeProvider>
//   );
// }

// export default App;
