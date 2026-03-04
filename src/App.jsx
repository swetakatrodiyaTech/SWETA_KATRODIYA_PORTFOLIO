import { useState, useEffect } from "react";
import { NAV_LINKS } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./styles/globals.css";

function AppContent() {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState("About");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollY >= sections[i].offsetTop) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "var(--bg-primary)", transition: "background 0.35s ease" }}>
      {/* Custom cursor — only on desktop */}
      <div
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: cursorVisible ? 0.85 : 0,
          left: mousePos.x - 6,
          top: mousePos.y - 6,
          transition: "left 0.08s, top 0.08s, opacity 0.3s",
          mixBlendMode: isDark ? "screen" : "multiply",
        }}
      />

      {/* Animated grid background */}
      <div className="bg-grid" />

      {/* Animated color orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Navbar navLinks={NAV_LINKS} activeSection={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "36px 24px",
          borderTop: "1px solid var(--border-color)",
          color: "var(--text-faint)",
          fontSize: "0.82rem",
          position: "relative",
          zIndex: 1,
          background: "var(--bg-primary)",
        }}
      >
        ✨ Designed &amp; Built by{" "}
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>Sweta Katrodiya</span>
        {" · "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}