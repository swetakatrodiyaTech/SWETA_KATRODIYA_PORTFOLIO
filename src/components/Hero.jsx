import Reveal from "./Reveal";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Hero({ scrollTo }) {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 60px", width: "100%" }}>
        <div className="hero-layout">
          {/* Left: text content */}
          <div className="hero-text-col">
            <Reveal delay={0}>
              <span className="badge">👋 Available for opportunities</span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-name" style={{ marginTop: 20 }}>
                <span style={{ color: "var(--text-primary)" }}>
                  {PERSONAL_INFO.name.split(" ")[0]}
                </span>
                <br />
                <span className="hero-name-gradient">
                  {PERSONAL_INFO.name.split(" ")[1]}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                  color: "var(--text-secondary)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  maxWidth: 520,
                  marginTop: 16,
                }}
              >
                {PERSONAL_INFO.shortBio}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
                <button className="btn-primary" onClick={() => scrollTo("Projects")}>
                  View Projects →
                </button>
                <a
                  href="#contact"
                  className="btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("Contact");
                  }}
                >
                  Get in Touch
                </a>
                <a
                  href="/sweta-cv.pdf"
                  download="Sweta_Katrodiya_CV.pdf"
                  className="btn-download"
                  title="Download CV"
                >
                  ⬇ Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div style={{ display: "flex", gap: 32, marginTop: 36, flexWrap: "wrap" }}>
                {PERSONAL_INFO.stats.map(({ value, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                        fontWeight: 800,
                        background: "var(--gradient-hero)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                        marginTop: 2,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: profile photo */}
          <Reveal delay={0.2}>
            <div className="hero-photo-col">
              <div className="hero-photo-wrap">
                {/* Glow ring */}
                <div className="photo-glow-ring" />
                {/* Rotating dashed ring */}
                <div className="photo-orbit-ring" />
                {/* Photo */}
                <img
                  src="/sweta.jpg"
                  alt="Sweta Katrodiya"
                  className="hero-photo"
                />
                {/* Floating tag */}
                <div className="photo-badge-float">
                  <span style={{ fontSize: "1rem" }}>⚡</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    Frontend Dev
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}