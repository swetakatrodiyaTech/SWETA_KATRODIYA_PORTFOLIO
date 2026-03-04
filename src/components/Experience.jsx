import Reveal from "./Reveal";
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </Reveal>

        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <div className="exp-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.role}
                  </div>
                  <div
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <span className="badge" style={{ alignSelf: "flex-start" }}>
                  {exp.period}
                </span>
              </div>
              <ul
                style={{
                  marginTop: 14,
                  paddingLeft: 18,
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                }}
              >
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {/* Education */}
        <Reveal delay={0.3}>
          <div style={{ marginTop: 48 }}>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                marginBottom: 20,
                color: "var(--text-primary)",
              }}
            >
              Education
            </h3>
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="exp-card"
                style={{ borderLeftColor: edu.color }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      style={{
                        color: edu.color,
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        marginTop: 2,
                      }}
                    >
                      {edu.institution}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      className="badge"
                      style={{
                        borderColor: `${edu.color}30`,
                        color: edu.color,
                        background: `${edu.color}12`,
                      }}
                    >
                      {edu.period}
                    </span>
                    <div
                      style={{
                        color: "var(--accent)",
                        fontWeight: 700,
                        marginTop: 6,
                        fontSize: "0.9rem",
                      }}
                    >
                      CGPA: {edu.cgpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Achievements */}
        {ACHIEVEMENTS.map((achievement) => (
          <Reveal key={achievement.title} delay={0.4}>
            <div
              style={{
                marginTop: 32,
                background: "var(--gradient-section)",
                border: "1px solid var(--border-accent)",
                borderRadius: 16,
                padding: "24px 28px",
                display: "flex",
                gap: 20,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>{achievement.emoji}</div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {achievement.title}
                </div>
                <div
                  style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: 4 }}
                >
                  {achievement.description}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}