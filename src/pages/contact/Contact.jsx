// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-vh-100 bg-dark text-white d-flex align-items-center justify-content-center p-4">
        <div className="container">
          <div className="row g-4 align-items-start h-100">
            {/* Left Info Card */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 shadow bg-light text-dark h-100 d-flex flex-column justify-content-between">
                <h2 className="fw-bold">Get in touch</h2>

                <div className="">
                  <h5 className="fw-semibold">Visit me</h5>
                  <p className="text-secondary small mb-1">
                    Come say hello at my office HQ.
                  </p>
                  <p className="text-secondary small">
                    Old baneshor- Kathmandu, Nepal
                  </p>
                </div>

                <div className="">
                  <h5 className="fw-semibold">Connect with me</h5>
                  <p className="text-secondary small mb-1">
                    My team is here to help You.
                  </p>
                  <p className="text-secondary small">
                    rabinyaupane55@gmail.com
                  </p>
                </div>

                <div className="mb-3">
                  <h5 className="fw-semibold">Contact me</h5>
                  <p className="text-secondary small mb-1">Mon–Fri, 8am–5pm</p>
                  <p className="text-secondary small">(+977) 9762731102</p>
                </div>

                <div>
                  <h5 className="fw-semibold">Social Media</h5>
                  <div className="d-flex gap-3 text-danger ">
                    <i className="bi bi-facebook fs-4"></i>
                    <i className="bi bi-linkedin fs-4"></i>
                    <i className="bi bi-instagram fs-4"></i>
                    <i className="bi bi-twitter fs-4"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-12 col-md-6">
              <form
                className="p-4 rounded-4 bg-dark border border-secondary shadow"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="0e64ed79-309b-4819-9e3b-2a6ae423eeca"
                ></input>
                {/* Name Fields */}
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small text-secondary">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your first Name"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small text-secondary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="mt-3">
                  <label className="form-label small text-secondary">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white border-secondary"
                    placeholder="Your company Name"
                  />
                </div>

                {/* Email */}
                <div className="mt-3">
                  <label className="form-label small text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control bg-transparent text-white border-secondary"
                    placeholder="Your email address"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mt-3">
                  <label className="form-label small text-secondary">
                    Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-secondary text-white">
                      🇬🇪
                    </span>
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="(+977) 9762731102"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-3">
                  <label className="form-label small text-secondary">
                    Message
                  </label>
                  <textarea
                    className="form-control bg-transparent text-white border-secondary"
                    rows="4"
                    placeholder="Tell us what we can help you with"
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="privacy"
                    required
                  />
                  <label
                    className="form-check-label small text-secondary"
                    htmlFor="privacy"
                  >
                    I’d like to receive more info. I agree to the{" "}
                    <span className="text-white text-decoration-underline">
                      Privacy Policy
                    </span>
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-4 py-2 fw-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
