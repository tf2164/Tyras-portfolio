// src/components/Projects.js
import '../comp.css';
import QAProjects from "./qa-data";
import { useState } from "react";

export default function QAportfolio() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="sections">
      <section id="projects">
        <div className="project-block">
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <h1 className="section-title">Caution: Builds in Progress...</h1>
            <p style={{ color: "#d0d0d0", maxWidth: "560px", margin: "0.75rem auto 0", lineHeight: "1.6" }}>
             QA projects. 
            </p>
          </div>

          <div className="wp-list">
            {QAProjects.map((project, i) => {
              const isOpen = openIndex === i;
              const hasLiveLink = Boolean(project.link) && !project.hideLiveLink;

              return (
                <div className={`wp-item${isOpen ? " wp-item--open" : ""}`} key={project.title}>
                  <div
                    className="wp-row"
                    onClick={() => toggle(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(i)}
                  >
                    <span className="wp-num">0{i + 1}</span>

                    <div className="wp-row-thumb">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="wp-row-img"
                      />
                    </div>

                    <div className="wp-title-group">
                      <span className="wp-name"> {project.title}</span>
                      <span className="wp-tech">{project.technologies.join(" · ")}</span>
                    </div>

                    {hasLiveLink ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wp-link-btn wp-link-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        View Github
                      </a>
                    ) : (
                      <span className="wp-link-btn wp-link-disabled" onClick={(e) => e.stopPropagation()}>
                        WIP Build
                      </span>
                    )}

                    <button className="wp-toggle" aria-label={isOpen ? "Collapse" : "Expand"}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{ transition: "transform 0.3s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                  </div>

                  <div className="wp-panel" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="wp-panel-inner">
                      <div className="wp-panel-content wp-panel-content--games">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="wp-preview-img"
                        />

                        <div className="wp-details">
                          <div className="wp-detail-block">
                            <span className="wp-detail-label">About</span>
                            <p className="wp-detail-text">{project.description}</p>
                          </div>

                          <div className="wp-detail-block">
                            <span className="wp-detail-label">Tech Stack</span>
                            <div className="wp-tech-pills">
                              {project.technologies.map((t) => (
                                <span key={t} className="wp-pill">{t}</span>
                              ))}
                            </div>
                          </div>

                          {(project.developmentStage || project.timelineProjection || project.milestone) && (
                            <div className="wp-meta-grid">
                              {project.developmentStage && (
                                <div className="wp-meta-card">
                                  <span className="wp-detail-label">Stage</span>
                                  <p className="wp-meta-value">{project.developmentStage}</p>
                                </div>
                              )}
                              {project.timelineProjection && (
                                <div className="wp-meta-card">
                                  <span className="wp-detail-label">Timeline</span>
                                  <p className="wp-meta-value">{project.timelineProjection}</p>
                                </div>
                              )}
                              {project.milestone && (
                                <div className="wp-meta-card">
                                  <span className="wp-detail-label">Current Milestone</span>
                                  <p className="wp-meta-value">{project.milestone}</p>
                                </div>
                              )}
                            </div>
                          )}

                          {Array.isArray(project.plannedPlatforms) && project.plannedPlatforms.length > 0 && (
                            <div className="wp-detail-block">
                              <span className="wp-detail-label">Planned Platforms</span>
                              <div className="wp-tech-pills">
                                {project.plannedPlatforms.map((platform) => (
                                  <span key={platform} className="wp-pill">{platform}</span>
                                ))}
                              </div>
                            </div>
                          )}

                          {Array.isArray(project.buildNotes) && project.buildNotes.length > 0 && (
                            <div className="wp-detail-block">
                              <span className="wp-detail-label">Dev Notes</span>
                              <ul className="wp-notes-list">
                                {project.buildNotes.map((note) => (
                                  <li key={note}>{note}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="wp-detail-block">
                            <span className="wp-detail-label">Links</span>
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="wp-link-btn wp-link-primary">
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                  </svg>
                                 Project Documentation
                                </a>
                              {hasLiveLink ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="wp-link-btn wp-link-primary">
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                  </svg>
                                  View Github
                                </a>
                              ) : (
                                <span className="wp-link-btn wp-link-disabled">No live build yet</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {Array.isArray(project.gallery) && project.gallery.length > 0 && (
                          <div className="wp-gallery-block">
                            <span className="wp-detail-label">Progress Gallery</span>
                            <div className="wp-gallery-grid">
                              {project.gallery.map((imgSrc, idx) => (
                                <img
                                  key={`${project.title}-gallery-${idx}`}
                                  src={imgSrc}
                                  alt={`${project.title} progress ${idx + 1}`}
                                  className="wp-gallery-thumb"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}