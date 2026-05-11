import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/ScrollToTop";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Old Baneshwor, Kathmandu, Nepal",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "rabinyaupane55@gmail.com",
    href: "mailto:rabinyaupane55@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+977 9762731102",
    href: "tel:+9779762731102",
  },
  {
    icon: <FaClock />,
    label: "Availability",
    value: "Mon – Fri, 8am – 5pm NPT",
  },
];

const socials = [
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/buddhi-sagar-nyaupane-05b10b335/",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/sagarncc9/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/buddhisagarn",
  },
];

export default function ContactPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <div>
        <div className="page-header">
          <div className="container">
            <p className="text-label mb-4">Contact</p>
            <h1 className="display-lg">Let's work together.</h1>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="contact-grid">
              {/* Left — info */}
              <div>
                <h2 className="display-md mb-4">Get in touch</h2>
                <p className="text-body mb-10">
                  Whether you have a project in mind, a question, or just want
                  to connect — I'd love to hear from you. I typically reply
                  within 24 hours.
                </p>

                <div style={{ marginBottom: "var(--space-10)" }}>
                  {contactItems.map((item) => (
                    <div key={item.label} className="contact-info-item">
                      <div className="contact-icon">{item.icon}</div>
                      <div>
                        <p className="text-label mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: 500,
                              color: "var(--color-text)",
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: 500,
                              color: "var(--color-text)",
                            }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-label mb-4">Find me online</p>
                <div className="social-links">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                      title={s.label}
                      style={{
                        width: "auto",
                        padding: "0.5rem 0.9rem",
                        gap: "var(--space-2)",
                        borderRadius: "var(--radius-md)",
                      }}
                    >
                      {s.icon}
                      <span style={{ fontSize: "0.8rem", fontWeight: 500 }}>
                        {s.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right — form */}
              <div>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  style={{
                    background: "var(--color-bg-soft)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-xl)",
                    padding: "var(--space-8)",
                  }}
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="0e64ed79-309b-4819-9e3b-2a6ae423eeca"
                  />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "var(--space-4)",
                    }}
                  >
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        className="form-input"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        className="form-input"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-input"
                      rows="5"
                      placeholder="Tell me about your project or idea..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    style={{ justifyContent: "center" }}
                  >
                    Send message
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-light)",
                      textAlign: "center",
                      marginTop: "var(--space-3)",
                    }}
                  >
                    I'll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
