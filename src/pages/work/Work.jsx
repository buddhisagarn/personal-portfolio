import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { projectWork } from "../../js/projectWork";
import ScrollToTop from "../../components/ScrollToTop";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div style={{ paddingTop: "64px" }}>
        <div className="page-header">
          <div className="container">
            <p className="text-label mb-4">Portfolio</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)" }}>
              <h1 className="display-lg">All Projects</h1>
              <p className="text-body-sm" style={{ maxWidth: 340 }}>
                A collection of work I've designed and built — from travel platforms to AI chatbots.
              </p>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="projects-list">
              {projectWork.map((item, i) => (
                <div
                  key={item.id}
                  className="project-row"
                  onClick={() => window.open(item.url)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="project-content">
                    <div className="project-number">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="project-title">{item.title}</h3>
                    <p className="text-body-sm">{item.content}</p>
                    <div className="project-tags">
                      <span className="tag">React</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">Web</span>
                    </div>
                    <span className="project-link">
                      Visit live site
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </span>
                  </div>
                  <div className="project-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="cta-section mt-16">
              <h2 className="display-md">Got a project idea?</h2>
              <p>I'm available for freelance work and open to interesting collaborations.</p>
              <Link to="/contact" className="btn-cta">Let's talk about it →</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
