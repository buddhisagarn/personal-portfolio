import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="about-profile-box info-box shadow-box h-full">
      <img src="/connection.jpg" alt="BG" className="bg-img" />
      <div className="inner-profile-icons shadow-box">
        <a
          href="https://www.instagram.com/sagarncc9/"
          className="instagram-profile-photo"
        >
          <i className="iconoir-dribbble"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/buddhi-sagar-nyaupane-05b10b335/"
          className="linkedin-profile-photo"
        >
          <i className="iconoir-twitter"></i>
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>Stay with me</h4>
          <h1>Profiles</h1>
        </div>

        <Link to="/contact" className="about-btn">
          <img src="/assets/images/icon.svg" alt="Button" />
        </Link>
      </div>
    </div>
  );
}
