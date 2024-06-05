import React from "react";
import { skills } from "./data";
import "./comp.css";


export default function Skills() {
  return (
    <section id="skills">
      <div>
        <div>
          <h1 className="section-title">Skills &amp; Technologies</h1>
          <p className="captions">
            Turning ideas into real-life products is my calling, these are my
            tools.
          </p>
        </div>
        <div className="">
          {skills.map((skill, index) => (
            <div key={index} className="">
              <div className="skill-align">
              <span className="title-font" style={{ fontSize: '20px', textAlign: 'center' }}>{skill.name}</span>
                <img src={skill.image} alt={skill.name} className="skill-image" style={{ width: '50px', height: '50px'}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
