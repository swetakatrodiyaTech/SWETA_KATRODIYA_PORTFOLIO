import { useState } from "react";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        zIndex: 1,
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">
            Project <span className="gradient-text">Experience</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: 36, fontSize: "0.95rem", maxWidth: 540 }}>
            A selection of professional projects built across various domains. Project names are kept confidential.
          </p>
        </Reveal>

        <div className="grid-2">
          {PROJECTS.map((proj, i) => (
            <Reveal key={`${proj.domain}-${i}`} delay={i * 0.07}>
              <div
                className="project-card"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderColor: hoveredIdx === i ? `${proj.color}55` : "var(--border-color)",
                }}
              >
                {/* Top row: emoji + domain badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 18,
                  }}
                >
                  <span style={{ fontSize: "2.2rem" }}>{proj.emoji}</span>
                  <span
                    style={{
                      background: `${proj.color}18`,
                      border: `1px solid ${proj.color}40`,
                      color: proj.color,
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {proj.domain}
                  </span>
                </div>

                {/* Project type as the "title" */}
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: 6,
                    color: "var(--text-primary)",
                  }}
                >
                  {proj.type}
                </h3>

                {/* Confidential label */}
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    marginBottom: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span>🔒</span>
                  <span>Confidential · Company Project</span>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.87rem",
                    lineHeight: 1.78,
                    marginBottom: 18,
                  }}
                >
                  {proj.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "var(--tech-bg)",
                        border: "1px solid var(--tech-border)",
                        color: "var(--tech-color)",
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: "0.72rem",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}