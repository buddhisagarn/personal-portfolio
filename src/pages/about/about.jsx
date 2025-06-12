import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-area">
        <div className="container">
          <div className="d-flex about-me-wrap align-items-start gap-24">
            <div>
              <div className="about-image-box shadow-box">
                <img src="assets/images/bg1.png" alt="BG" className="bg-img" />
                <div className="image-inner">
                  <img src="/profile.jpg" alt="About Me" />
                </div>
              </div>
            </div>

            <div className="about-details">
              <h1 className="section-heading">
                <img src="assets/images/star-2.png" alt="Star" /> Self-summary{" "}
                <img src="assets/images/star-2.png" alt="Star" />
              </h1>
              <div className="about-details-inner shadow-box">
                <img src="assets/images/icon2.png" alt="Star" />
                <h1>Buddhi Sagar Nyaupane</h1>
                <p>
                  I am a student with a focus on web design, illustration, a
                  visual development. I have a diverse range of experience
                  having worked across various fields and industries.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-6">
              <div className="about-edc-exp about-experience shadow-box">
                <img src="assets/images/bg1.png" alt="BG" className="bg-img" />
                <h3>EXPERIENCE</h3>

                <ul>
                  <li>
                    <p className="date">2007 - 2017</p>
                    <h2>Framer Designer & Developer</h2>
                    <p className="type">Bluebase Designs</p>
                  </li>
                  <li>
                    <p className="date">2017 - 2023</p>
                    <h2>Front-End Developer</h2>
                    <p className="type">Larsen & Toubro</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-edc-exp about-education shadow-box">
                <img src="assets/images/bg1.png" alt="BG" className="bg-img" />
                <h3>EDUCATION</h3>

                <ul>
                  <li>
                    <p className="date">2023 - 2027</p>
                    <h2>
                      Bachelor of Computer Science and Information Technology
                    </h2>
                    <p className="type">Pokhara University</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-12">
              <div className="d-flex profile-contact-credentials-wrap gap-24">
                <div>
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="inner-profile-icons shadow-box">
                      <a href="#">
                        <i className="iconoir-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="iconoir-twitter"></i>
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                      </div>

                      <a href="contact.html" className="about-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="about-contact-box info-box shadow-box">
                    <a className="overlay-link" href="contact.html"></a>
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <img
                      src="assets/images/icon2.png"
                      alt="Icon"
                      className="star-icon"
                    />
                    <h1>
                      Let&apos;s <br />
                      work <span>together.</span>
                    </h1>
                    <a href="contact.html" className="about-btn">
                      <img src="assets/images/icon.svg" alt="Button" />
                    </a>
                  </div>
                </div>

                <div className="h-full">
                  <div className="about-crenditials-box info-box shadow-box">
                    <a className="overlay-link" href="credentials.html"></a>
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <img src="assets/images/sign.png" alt="Sign" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
                      </div>

                      <a href="credentials.html" className="about-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
