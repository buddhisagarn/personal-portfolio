import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="navbar-wrap" style={{ boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none" }}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              Buddhi Sagar<span />
            </Link>

            {/* Desktop nav */}
            <nav className="nav-links">
              <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
              <Link to="/work" className={isActive("/work") ? "active" : ""}>Work</Link>
              <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
            </nav>

            <Link to="/contact" className="nav-cta">
              Let's talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <>
                  <span style={{ transform: "rotate(45deg) translate(5px, 5px)" }} />
                  <span style={{ opacity: 0 }} />
                  <span style={{ transform: "rotate(-45deg) translate(5px, -5px)" }} />
                </>
              ) : (
                <>
                  <span /><span /><span />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
        <Link to="/work" className={isActive("/work") ? "active" : ""}>Work</Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
        <Link to="/contact" className="btn btn-primary mt-6" style={{ width: "fit-content" }}>Let's talk</Link>
      </div>
    </>
  );
};

export default Navbar;
