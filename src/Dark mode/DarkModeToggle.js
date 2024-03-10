// DarkModeToggle.js
import '../index.css';

// DarkModeToggle.js
import React from 'react';
import { useDarkMode } from './DarkModeContext';


const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="darkModeToggle" className="toggle">
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
