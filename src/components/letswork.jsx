import { Link } from "react-router-dom";
export default function LetsWork() {
  return (
    <div className="col-md-6">
      <div className="about-contact-box info-box shadow-box">
        <Link className="overlay-link" to="/contact"></Link>
        <img src="/service.jpg" alt="BG" className="bg-img" />
        <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
        <h1>
          Let&apos;s <br />
          work <span>together.</span>
        </h1>
        <Link to="/contact" className="about-btn">
          <img src="/assets/images/icon.svg" alt="Button" />
        </Link>
      </div>
    </div>
  );
}
