// src/components/Projects.js
import '../comp.css';
import { mobileprojects } from "./mobile-data";

export default function MobileProjects() {
  return (
    <div className="sections">
      <section id="projects">
        <div className="project-block">
          <div className="section-header">
            <h1 className="section-title">
              Mobile Apps I've Built
            </h1>
            <p className="section-description">
              These are all projects built outside of academic responsibilities. I recreated a couple of projects from my apprenticeship with new skills.
            </p>
          </div>

          <div className='project-containers'>
            {mobileprojects.map((project) => (
              <a
                href={project.link}
                key={project.title}
                className="project-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <img
                    alt={project.title}
                    className="galleryimg"
                    src={project.image}
                  />
                  <div className="">
                    <p style={{ margin: '0', fontSize: '1.25rem', color: '#f0f0f0' }}>
                      {project.title}
                    </p>
                    <p style={{ margin: '0.2rem 0', fontStyle: 'italic', color: '#d0d0d0' }}>
                      {project.technologies.join(' · ')}
                    </p>
                    <p style={{ margin: '0.2rem 0', color: '#f5f5f5' }}>
                      {project.description} <span style={{ fontWeight: '600', color: '#00ffff' }}>[View Project →]</span>
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}