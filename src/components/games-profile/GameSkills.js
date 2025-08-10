import { gameskills } from "./games-data";
import "../comp.css";

export default function GameSkills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="section-title">Skills &amp; Technologies</h1>
          <p className="section-description" style={{ color: '#f5f5f5', textAlign: 'center', marginBottom: '3rem' }}>
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
