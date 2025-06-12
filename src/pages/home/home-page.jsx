import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const HomePage = () => {
  return (
    <main className="main-homepage">
      <Navbar />

      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-me-box shadow-box">
                <a className="overlay-link" href="about.html"></a>
                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                <div className="img-box">
                  <img src="/profile.jpg" alt="About Me" />
                </div>
                <div className="infos">
                  <h4>A WEB DESIGNER</h4>
                  <h1>Buddhi Sagar Nyaupane.</h1>
                  <p>I am a Web Designer.</p>
                  <a href="#" className="about-btn">
                    <img src="/assets/images/icon.svg" alt="Button" />
                  </a>
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
                          LATEST WORK AND <b>FEATURED</b>
                          <img src="/assets/images/star1.svg" alt="Star" />
                          LATEST WORK AND <b>FEATURED</b>
                          <img src="/assets/images/star1.svg" alt="Star" />
                          LATEST WORK AND <b>FEATURED</b>
                          <img src="/assets/images/star1.svg" alt="Star" />
                          LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                          <img src="/assets/images/star1.svg" alt="Star" />
                          LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                          <img src="/assets/images/star1.svg" alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gx-row d-flex gap-24">
                  <div>
                    <div className="about-crenditials-box info-box shadow-box h-full">
                      <a className="overlay-link" href="credentials.html"></a>
                      <img
                        src="/assets/images/bg1.png"
                        alt="BG"
                        className="bg-img"
                      />
                      <img src="/assets/images/sign.png" alt="Sign" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>more about me</h4>
                          <h1>Credentials</h1>
                        </div>

                        <a href="credentials.html" className="about-btn">
                          <img src="/assets/images/icon.svg" alt="Button" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="about-project-box info-box shadow-box h-full">
                      <a className="overlay-link" href="works.html"></a>
                      <img
                        src="/assets/images/bg1.png"
                        alt="BG"
                        className="bg-img"
                      />
                      <img src="/assets/images/my-works.png" alt="My Works" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>SHOWCASE</h4>
                          <h1>Projects</h1>
                        </div>

                        <a href="#" className="about-btn">
                          <img src="/assets/images/icon.svg" alt="Button" />
                        </a>
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
                    <a href="blog.html" className="overlay-link"></a>
                    <img
                      src="/assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <img src="/assets/images/gfonts.png" alt="GFonts" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Blog</h4>
                        <h1>GFonts</h1>
                      </div>

                      <a href="blog.html" className="about-btn">
                        <img src="/assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="about-services-box info-box shadow-box h-full">
                    <a href="service.html" className="overlay-link"></a>
                    <img
                      src="/assets/images/bg1.png"
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

                      <a href="service.html" className="about-btn">
                        <img src="/assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img
                      src="/assets/images/bg1.png"
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
                        <img src="/assets/images/icon.svg" alt="Button" />
                      </a>
                    </div>
                  </div>
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
                    <h1>+125</h1>
                    <p>
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+210</h1>
                    <p>
                      Total <br />
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-contact-box info-box shadow-box">
                <a className="overlay-link" href="contact.html"></a>
                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                <img
                  src="/assets/images/icon2.png"
                  alt="Icon"
                  className="star-icon"
                />
                <h1>
                  Let&apos;s <br />
                  work <span>together.</span>
                </h1>
                <a href="#" className="about-btn">
                  <img src="/assets/images/icon.svg" alt="Button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
