import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <a href="index.html" className="logo">
            <img src="/assets/images/logo.svg" alt="Logo" />
          </a>
          <ul className="footer-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <p className="copyright">&copy; All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
