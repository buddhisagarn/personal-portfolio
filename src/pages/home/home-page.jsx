import Credentials from "../../components/credentials";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/profile";
import LetsWork from "../../components/letswork";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className="main-homepage">
      <Navbar />

      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-me-box shadow-box">
                <Link className="overlay-link" to="/about"></Link>
                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                <div className="img-box">
                  <img src="/profile.jpg" alt="Buddhi Sagar" />
                </div>
                <div className="infos">
                  <h4>A WEB Developer</h4>
                  <h1>Buddhi Sagar Nyaupane.</h1>
                  <p>Also a web designer.</p>
                  <Link to="/about" className="about-btn">
                    <img src="/assets/images/icon.svg" alt="Button" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-credentials-wrap">
                <div>
                  <div className="banner shadow-box">
                    <div className="marquee">
                      <div>
                        <span>
                          Buddhi Sagar Neupane <b>Nepal React Developer</b>
                          <img src="/assets/images/star1.svg" alt="Star" />
                          Buddhi Sagar Neupane <b>Nepal React Developer</b>
                          <img src="/assets/images/star1.svg" alt="Star" />
                          Buddhi Sagar Neupane <b>Nepal React Developer</b>
                          <img src="/assets/images/star1.svg" alt="Star" />
                          Buddhi Sagar Neupane <b>Nepal React Developer</b>{" "}
                          Buddhi Sagar Neupane
                          <img src="/assets/images/star1.svg" alt="Star" />
                          Buddhi Sagar Neupane <b>Nepal React Developer</b>{" "}
                          Buddhi Sagar Neupane
                          <img src="/assets/images/star1.svg" alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gx-row d-flex gap-24">
                  <Credentials />
                  <div>
                    <div className="about-project-box info-box shadow-box h-full">
                      <Link className="overlay-link" to={"/work"}></Link>
                      <img
                        src="/assets/images/bg1.png"
                        alt="BG"
                        className="bg-img"
                      />
                      <img src="/chat-bot.jpg" alt="My Works" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>SHOWCASE</h4>
                          <h1>Projects</h1>
                        </div>

                        <Link to="/work" className="about-btn">
                          <img src="/assets/images/icon.svg" alt="Button" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex gap-24">
                <div>
                  <div className="about-blog-box info-box shadow-box h-full">
                    <Link to={"/blog"} className="overlay-link"></Link>
                    <img
                      src="/assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <img src="/bhagavad-gita.jpg" alt="GFonts" height="200" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Blogs</h4>
                        <h1>Bhagavad Gita</h1>
                      </div>
                      <Link to={"/blog"} className="about-btn">
                        <img src="/assets/images/icon.svg" alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="about-services-box info-box shadow-box h-full">
                    <Link to="/services" className="overlay-link"></Link>
                    <img
                      src="/service-we-offer.jpg"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="icon-boxes">
                      <i className="iconoir-camera"></i>
                      <i className="iconoir-design-pencil"></i>
                      <i className="iconoir-color-filter"></i>
                      <i className="iconoir-dev-mode-phone"></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>specialization</h4>
                        <h1>Services Offering</h1>
                      </div>
                      <Link to="/services" className="about-btn">
                        <img src="/assets/images/icon.svg" alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <Profile />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-6">
              <div className="about-client-box info-box shadow-box">
                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                  <div className="client-item">
                    <h1>02</h1>
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+0</h1>
                    <p>
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>

                  <div
                    className="client-item"
                    onClick={() => navigate("/work")}
                  >
                    <h1>+5</h1>
                    <p>
                      Total <br />
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <LetsWork />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
