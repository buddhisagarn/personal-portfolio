import Credentials from "../../components/credentials";
import Footer from "../../components/footer";
import LetsWork from "../../components/letswork";
import Navbar from "../../components/navbar";
import Profile from "../../components/profile";

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
                  <img src="/profile.jpg" alt="Buddhi Sagar" />
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
                    <p className="date">2023 - 2025</p>
                    <h2>Designer & Developer</h2>
                    <p className="type">
                      Web development | canva expert | figma
                    </p>
                  </li>
                  <li>
                    <p className="date">2023 - 2025</p>
                    <h2>Front-End Developer</h2>
                    <p className="type">React</p>
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
                  <Profile />
                </div>
                <LetsWork />
                <div className="h-full">
                  <Credentials />
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
