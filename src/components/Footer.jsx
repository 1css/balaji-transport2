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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="row g-4">
          <div className="col-lg-5 col-md-6">
            <div className="brand-logo mb-3" style={{ color: "#fff" }}>
              BALAJI<span> TRANSPORTS</span>
            </div>
            <p>{contactInfo.infoText}</p>
            <div className="social-row mt-3">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Links</h5>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <i className="bi bi-caret-right-fill" />
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

          {/* <div className="col-lg-3 col-md-4">
            <h5>Address</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2" style={{ color: "var(--orange)" }} />
              <a href={contactInfo.mapLink} target="_blank" rel="noreferrer">
                {contactInfo.address}
              </a>
            </p>
          </div> */}

          <div className="col-lg-4 col-md-6">
            <h5>Contact</h5>
            <ul>
              <li>
                <i className="bi bi-telephone-fill" />
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill" />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
