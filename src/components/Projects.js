// src/components/Projects.js
import './comp.css';
import React from "react";
import { projects } from "./data";

export default function Projects() {

  
  return (
    <section id="projects">
      <div className="">
        <div className="section-header">
          <h1 className="section-title">
            Apps I've Built test
          </h1>
          <p className="section-description">
          These are all projects built outside of academic responsibilities. I recreated a couple of projects from my apprenticeship with new skills.
           </p>
        </div>
        <div className="project-block">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="">
              <div className="">
                <img
                  alt="gallery"
                  className="galleryimg"
                  src={project.image}
                />
                <div className="">
                  <h2 className="">
                    {project.subtitle}
                  </h2>
                  <h1 className="">
                    {project.title}
                  </h1>
                  <p className="item-p">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}