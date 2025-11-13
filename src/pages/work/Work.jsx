import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Work = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <section className="projects-area">
        <div className="container">
          <h1 className="section-heading" data-aos="fade-up">
            <img src="assets/images/star-2.png" alt="Star" /> All Projects{" "}
            <img src="assets/images/star-2.png" alt="Star" />
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div data-aos="zoom-in">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/work-details" />
                  <img src="blog1.jpg" alt="BG" className="bg-img" />
                  <div className="project-img">
                    <img src="assets/images/project1.jpg" alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>WEB DESIGNING</p>
                      <h1>Dynamic</h1>
                    </div>
                    <Link to="/work-details" className="project-btn">
                      <img src="assets/images/icon.svg" alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/work-details"></Link>
                  <img
                    src="assets/images/bg1.png"
                    alt="BG"
                    className="bg-img"
                  />
                  <div className="project-img">
                    <img src="assets/images/project2.jpg" alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>PHOTOGRAPHY</p>
                      <h1>Diesel H1</h1>
                    </div>
                    <Link to="/work-details" className="project-btn">
                      <img src="assets/images/icon.svg" alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <h1 className="section-heading" data-aos="fade-up">
                <img src="assets/images/star-2.png" alt="Star" /> All Projects{" "}
                <img src="assets/images/star-2.png" alt="Star" />
              </h1>

              <div className="d-flex align-items-start gap-24">
                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <Link className="overlay-link" to="/work-details"></Link>
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="project-img">
                      <img src="assets/images/project3.jpg" alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>MOBILE DESIGNING</p>
                        <h1>Seven Studio</h1>
                      </div>
                      <Link to="/work-details" className="project-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <Link className="overlay-link" to="/work-details"></Link>
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="project-img">
                      <img src="assets/images/project4.jpg" alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>Branding</p>
                        <h1>Raven Studio</h1>
                      </div>
                      <Link to="/work-details" className="project-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-24">
                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <Link className="overlay-link" to="/work-details"></Link>
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="project-img">
                      <img src="assets/images/project5.jpg" alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>MOBILE DESIGNING</p>
                        <h1>Submarine</h1>
                      </div>
                      <Link to="/work-details" className="project-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="project-item shadow-box">
                    <Link className="overlay-link" to="/work-details"></Link>
                    <img
                      src="assets/images/bg1.png"
                      alt="BG"
                      className="bg-img"
                    />
                    <div className="project-img">
                      <img src="assets/images/project6.jpg" alt="Project" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="project-info">
                        <p>WEB DESIGNING</p>
                        <h1>Hydra Merc</h1>
                      </div>
                      <Link to="/work-details" className="project-btn">
                        <img src="assets/images/icon.svg" alt="Button" />
                      </Link>
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
export default Work;
