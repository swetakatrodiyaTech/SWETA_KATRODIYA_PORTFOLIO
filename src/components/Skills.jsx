import Reveal from "./Reveal";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </Reveal>

        <div className="card-panel">
          <table className="skills-table">
            <tbody>
              {SKILLS.map((group) => (
                <tr key={group.category}>
                  <th>{group.category}</th>
                  <td>
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="skill-tag"
                        style={{ marginRight: 8, marginBottom: 6 }}
                      >
                        {item}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}