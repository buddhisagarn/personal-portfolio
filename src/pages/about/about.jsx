import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const stack = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Node.js",
  "Python",
  "Firebase",
  "Vite",
  "Canva",
];

export default function About() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div style={{ paddingTop: "4px" }}>
        {/* Page header */}
        <div className="page-header">
          <div className="container">
            <p className="text-label mb-4">About me</p>
            <h1 className="display-lg">Who I am</h1>
          </div>
        </div>

        {/* Main about section */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              {/* Photo */}
              <div>
                <div className="about-photo">
                  <img src="/profile.jpg" alt="Buddhi Sagar Nyaupane" />
                </div>
              </div>

              {/* Bio */}
              <div className="about-body">
                <p className="text-label mb-6">Introduction</p>

                <h2 className="display-md mb-8">Buddhi Sagar Nyaupane</h2>

                <p>
                  I'm a BCSIT student at Pokhara University with a deep passion
                  for building things on the web. My focus sits at the
                  intersection of good design and solid engineering — I care
                  equally about how things look and how they work.
                </p>
                <p>
                  Over the past two years, I've worked across Full Stack Web
                  development, UI/UX design, and AI-integrated web applications.
                  I enjoy taking a project from a rough idea to a polished,
                  deployed product.
                </p>
                <p>
                  Outside of coding, I write about technology and philosophy —
                  including a blog series exploring the Bhagavad Gita through a
                  modern lens. I believe that balance between logic and
                  reflection makes for a better thinker and a better builder.
                </p>
                <p>
                  I'm currently looking for Full Stack
                  development roles where I can contribute, learn fast, and grow
                  alongside a team.
                </p>

                {/* Contact info */}
                <div
                  style={{
                    margin: "var(--space-8) 0",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--space-4)",
                  }}
                >
                  {[
                    { label: "Location", value: "Kathmandu, Nepal" },
                    { label: "University", value: "Pokhara University" },
                    { label: "Email", value: "rabinyaupane55@gmail.com" },
                    { label: "Phone", value: "+977 9762731102" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-label mb-1">{item.label}</p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--color-text)",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link to="/contact" className="btn btn-primary btn-sm">
                    Hire me
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/buddhi-sagar-nyaupane-05b10b335/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    LinkedIn →
                  </a>
                </div>

                {/* Experience */}
                <div className="mt-12">
                  <p className="text-label mb-6">Experience</p>
                  <div className="timeline">
                    {[
                      {
                        date: "2023–2025",
                        title: "Designer & Developer",
                        sub: "Web Development · Canva Expert · Figma",
                      },
                      {
                        date: "2023–2025",
                        title: "Front-End Developer",
                        sub: "React · JavaScript · Responsive Design",
                      },
                    ].map((item) => (
                      <div key={item.title} className="timeline-item">
                        <span className="timeline-date">{item.date}</span>
                        <div>
                          <div className="timeline-title">{item.title}</div>
                          <div className="timeline-sub">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mt-12">
                  <p className="text-label mb-6">Education</p>
                  <div className="timeline">
                    <div className="timeline-item">
                      <span className="timeline-date">2023–2027</span>
                      <div>
                        <div className="timeline-title">
                          BSc Computer Science & Information Technology
                        </div>
                        <div className="timeline-sub">
                          Pokhara University · Currently Enrolled
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-12">
                  <p className="text-label mb-6">Technologies</p>
                  <div className="stack-grid">
                    {stack.map((t) => (
                      <span key={t} className="stack-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
