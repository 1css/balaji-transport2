import { useNavigate, useLocation } from "react-router-dom";
import { navLinks, contactInfo } from "../data/siteData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNavClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="row g-4 footer-row">
          {/* Brand / About */}
          <div className="col-lg-4 col-md-6 footer-column">
            <div className="footer-brand">
              BALAJI<span> TRANSPORTS</span>
            </div>

            <p className="footer-description">{contactInfo.infoText}</p>

            <div className="social-row">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-4 col-md-6 footer-column">
            <h5>Links</h5>

            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <i className="bi bi-caret-right-fill"></i>

                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleFooterNavClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6 footer-column">
            <h5>Contact</h5>

            <ul className="footer-links">
              <li>
                <i className="bi bi-telephone-fill"></i>

                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </li>

              <li>
                <i className="bi bi-envelope-fill"></i>

                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>

              <li>
                <i className="bi bi-receipt"></i>

                <span className="footer-gstin">
                  GSTIN: <strong>{contactInfo.gstin}</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} All Rights Reserved By Balaji Transports, Tumakuru.
        </div>
      </div>
    </footer>
  );
}
