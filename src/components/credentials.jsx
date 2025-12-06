import { Link } from "react-router-dom";
export default function Credentials() {
  return (
    <div>
      <div className="about-crenditials-box info-box shadow-box h-full">
        <Link className="overlay-link" to="/about"></Link>
        <img src="/me.jpg" alt="BG" className="bg-img" />
        <img src="/assets/images/sign.png" alt="Sign" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>more about me</h4>
            <h1>Credentials</h1>
          </div>

          <Link to="/about" className="about-btn">
            <img src="/assets/images/icon.svg" alt="Button" />
          </Link>
        </div>
      </div>
    </div>
  );
}
