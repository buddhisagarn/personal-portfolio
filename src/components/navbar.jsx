import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" height="100" />
          </Link>

          <nav className="navbar">
            <ul className="menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/work"}>Work</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            <Link className="theme-btn" to={"/letstalk"}>
              Let&apos;s talk
            </Link>
          </nav>

          <Link to={"/letstalk"} className="theme-btn">
            Let&apos;s talk
          </Link>

          <div className="show-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
