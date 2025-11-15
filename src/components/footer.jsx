import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" height="100" />
          </Link>
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
