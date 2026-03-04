import { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ navLinks, activeSection, scrollTo }) {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link) => {
    scrollTo(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Brand */}
        <div className="navbar-brand">
          {PERSONAL_INFO.name.split(" ").map((n) => n[0]).join("")}.
        </div>

        {/* Desktop links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <span
              key={link}
              className={`nav-link${activeSection === link ? " active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Right: toggle + hamburger */}
        <div className="navbar-right">
          {/* Theme toggle pill */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--toggle-bg)",
              border: "1px solid var(--toggle-border)",
              borderRadius: 30,
              padding: "5px 12px",
              cursor: "pointer",
              color: "var(--text-secondary)",
              fontSize: "0.82rem",
              fontWeight: 600,
              fontFamily: "inherit",
              transition: "all 0.25s",
              whiteSpace: "nowrap",
            }}
          >
            <span>{isDark ? "☀️" : "🌙"}</span>
            <span style={{ display: "none" }} className="toggle-label">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <span
            key={link}
            className={`nav-link${activeSection === link ? " active" : ""}`}
            onClick={() => handleNav(link)}
          >
            {link}
          </span>
        ))}
      </div>
    </>
  );
}