import { CONTACT } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Contact() {
  const contactItems = [
    { icon: "📧", label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: "📱", label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: "💼", label: "linkedin.com/in/sweta-katrodiya", href: CONTACT.linkedin },
    { icon: "📍", label: CONTACT.location, href: null },
  ];

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: 36,
              fontSize: "1.05rem",
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Open to frontend roles and interesting projects. Feel free to reach out!
          </p>
        </Reveal>

        <div style={{ display: "grid", gap: 12, maxWidth: 520 }}>
          {contactItems.map(({ icon, label, href }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              {href ? (
                <a
                  href={href}
                  className="contact-link"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span style={{ fontSize: "1.3rem" }}>{icon}</span>
                  <span style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>{label}</span>
                  <span style={{ marginLeft: "auto", color: "var(--accent)", fontWeight: 700 }}>→</span>
                </a>
              ) : (
                <div className="contact-link" style={{ cursor: "default" }}>
                  <span style={{ fontSize: "1.3rem" }}>{icon}</span>
                  <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>{label}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}