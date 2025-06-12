import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo">
            <img src="/assets/images/logo.svg" alt="Logo" />
          </a>

          <nav className="navbar">
            <ul className="menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <a>Works</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            <a className="theme-btn">Let&apos;s talk</a>
          </nav>

          <a className="theme-btn">Let&apos;s talk</a>

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
