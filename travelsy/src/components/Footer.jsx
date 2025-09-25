import React from "react";

const Footer = () => {
  return (
    <footer className="text-dark pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Travelsy Help */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold mb-3">Need Travelsy Help?</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms Of Use</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Statement</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms Of Use</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Statement</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold mb-3">Other Services & Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Your Account</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Rewards Program</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Partners</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Activities</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Hire Equipment</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Camping Locations</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Blogs</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Customer Service Help</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Partner With Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Give Us Feedback</a></li>
            </ul>
          </div>

          {/* Mailing List */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Mailing List</h5>
            <p className="small">
              Sign up for our mailing list and get the latest offers and promotions straight in your inbox.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your Email"
              />
              <button type="submit" style={{backgroundColor: "#FF5200"}} className="btn text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row mt-4">
          <div className="col-12 col-md-6 mb-3">
            <h5 className="fw-semibold mb-2">Contact Info</h5>
            <p>Call Us: +254 716909 815</p>
            <p>Email Us: info@travelsy.com</p>
            <p>
              2nd Floor, Fedha Plaza, <br />
              Westlands, Nairobi, Kenya. <br />
              P.O Box 7231-00300 Nairobi, Kenya
            </p>
            <div className="mb-3">
              <a href="#" className="text-dark me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="border-top py-4">
            <br/>
        <div className="container">
            <div className="row align-items-center">
            {/* Left Side - Logo/Name */}
            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                <h4 className="mb-0 fw-bold">Travelsy</h4>
            </div>

            {/* Center - Sponsors */}
            <div className="col-md-6 d-flex justify-content-center flex-wrap gap-4">
                <img src="/src/assets/mpessa.png" alt="Sponsor 1" className="img-fluid" style={{ maxHeight: "28px" }} />
                <img src="/src/assets/discover.png" alt="Sponsor 2" className="img-fluid" style={{ maxHeight: "28px" }} />
                <img src="/src/assets/visa.png" alt="Sponsor 3" className="img-fluid" style={{ maxHeight: "28px" }} />
                <img src="/src/assets/paypal.png" alt="Sponsor 4" className="img-fluid" style={{ maxHeight: "28px" }} />
                <img src="/src/assets/mcard.png" alt="Sponsor 5" className="img-fluid" style={{ maxHeight: "28px" }} />
            </div>

            {/* Right Side - Language & Currency */}
            <div className="col-md-3 d-flex justify-content-center justify-content-md-end gap-3">
                <div className="d-flex align-items-center border px-2 py-1 rounded">
                <span className="me-2">🇺🇸</span>
                <select className="form-select form-select-sm border-0">
                    <option>English (United States)</option>
                    <option>French</option>
                    <option>Spanish</option>
                </select>
                </div>
                <div className="d-flex align-items-center border px-2 py-1 rounded">
                <select className="form-select form-select-sm border-0">
                    <option>KES</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary mt-4 py-4">
        <br/>
        <div className="container d-flex flex-column flex-md-row justify-content-between small text-center text-md-start">
            <p className="mb-1">© 2019 Travelsy Ltd. All rights reserved</p>
            <p className="text-muted mb-0">Made in Kenya by Ralak</p>
        </div>
        <br/>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
