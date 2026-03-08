import { gameskills } from "./games-data";
import "../comp.css";
import "../skills-yellow.css";

export default function GameSkills() {
  return (
    <section id="skills" className="skills-theme-yellow">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="section-title skills-title">Skills &amp; Technologies</h1>
          <p className="section-description skills-description">
            Turning ideas into real-life products is my calling, these are my tools.
          </p>
        </div>
        
        <div className="skills-simple-grid">
          {gameskills.map((skill, index) => (
            <div key={index} className="skill-simple-item">
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="skill-simple-icon"
              />
              <span className="skill-simple-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
