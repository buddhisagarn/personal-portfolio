import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { projectWork } from "../../js/projectWork";
import ScrollToTop from "../../components/ScrollToTop";
import {
  FaReact,
  FaPalette,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaSearch,
  FaGraduationCap,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaReact />,
    title: "React Development",
    desc: "Building fast, scalable SPAs and web apps with React, hooks, and modern patterns.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Crafting clean, user-centered interfaces using Figma and design systems.",
  },
  {
    icon: <FaGlobe />,
    title: "Full-Stack Web",
    desc: "End-to-end development with HTML, CSS, JavaScript, and backend integrations.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Mobile-first layouts that look great on every screen size and device.",
  },
  {
    icon: <FaRobot />,
    title: "AI Integration",
    desc: "Incorporating AI and ML APIs to build intelligent, adaptive applications.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Technical SEO, performance tuning, and content structure for higher rankings.",
  },
];

const stack = [
  "React",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Figma",
  "Git & GitHub",
  "Node.js",
  "Python",
  "Firebase",
  "Vite",
];

export default function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left */}
            <div>
              <div className="hero-eyebrow">
                <span className="dot" />
                Available for opportunities
              </div>

              <h1 className="display-xl hero-title">
                Buddhi Sagar
                <br />
                <p>Nyaupane.</p>
              </h1>

              <p className="hero-desc">
                A Computer Science student and front-end developer based in
                Nepal. I build clean, fast, and accessible web experiences —
                from design to deployment.
              </p>

              <div className="hero-actions">
                <Link to="/work" className="btn btn-primary">
                  View my work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in touch
                </Link>
              </div>

              <div className="hero-scroll">
                <span className="hero-scroll-line" />
                Scroll to explore
              </div>
            </div>

            {/* Right — photo */}
            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <img src="/profile.jpg" alt="Buddhi Sagar Nyaupane" />
              </div>
              {/* Floating badge */}
              <div
                className="hero-badge"
                style={{ bottom: "var(--space-6)", left: "-20px" }}
              >
                <div className="hero-badge-icon">
                  <FaGraduationCap />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                    }}
                  >
                    BSc CSIT
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Pokhara University
                  </div>
                </div>
              </div>
              <div
                className="hero-badge"
                style={{
                  top: "var(--space-6)",
                  right: "-20px",
                  left: "auto",
                  bottom: "auto",
                }}
              >
                <div className="hero-badge-icon">
                  <FaReact />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                    }}
                  >
                    React Developer
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    2+ years building
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { n: "2+", l: "Years Experience" },
              { n: "5+", l: "Projects Built" },
              { n: "3", l: "Services Offered" },
              { n: "100%", l: "Passion" },
            ].map((s) => (
              <div key={s.l} className="stat-item">
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS / SERVICES ────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-row">
            <div>
              <p className="text-label mb-4">What I do</p>
              <h2 className="display-lg">Skills &amp; Services</h2>
            </div>
            <Link to="/work" className="btn btn-secondary btn-sm">
              See all work →
            </Link>
          </div>

          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.title} className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-title">{s.title}</div>
                <div className="skill-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--color-bg-soft)" }}
      >
        <div className="container">
          <div className="section-header-row">
            <div>
              <p className="text-label mb-4">Selected work</p>
              <h2 className="display-lg">Featured Projects</h2>
            </div>
            <Link to="/work" className="btn btn-secondary btn-sm">
              View all →
            </Link>
          </div>

          <div className="projects-list">
            {projectWork.slice(0, 3).map((item, i) => (
              <div
                key={item.id}
                className="project-row"
                onClick={() => window.open(item.url)}
                style={{ cursor: "pointer" }}
              >
                <div className="project-content">
                  <div className="project-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="project-title">{item.title}</h3>
                  <p className="text-body-sm">{item.content}</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Web</span>
                  </div>
                  <span className="project-link">
                    Live site
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>
                <div className="project-img">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="text-label mb-4">Technologies</p>
          <h2 className="display-md mb-8">Tech I Work With</h2>
          <div className="stack-grid">
            {stack.map((t) => (
              <span key={t} className="stack-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-section">
            <h2 className="display-md">Let's build something great.</h2>
            <p>
              Open to internships, freelance projects, and full-time
              opportunities.
            </p>
            <Link to="/contact" className="btn-cta">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
