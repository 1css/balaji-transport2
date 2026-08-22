import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, contactInfo } from "../data/siteData";
import "./Navbar.css";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const positions = navLinks.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: Infinity };
        return { id: link.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      positions.sort((a, b) => a.top - b.top);
      setActive(positions[0].id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setExpanded(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="topbar d-none d-md-block">
        <div className="container-xl d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>
              <i className="bi bi-telephone-fill me-2" />
              Call : {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <i className="bi bi-envelope-fill me-2" />
              Email : {contactInfo.email}
            </a>
          </div>
          <a href={contactInfo.mapLink} target="_blank" rel="noreferrer">
            <i className="bi bi-geo-alt-fill me-2" />
            Location
          </a>
        </div>
      </div>

      <nav className="brand-navbar navbar navbar-expand-lg sticky-top">
        <div className="container-xl">
          <a
            className="navbar-brand brand-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            BALAJI<span> TRANSPORTS</span>
            <small>Steel &amp; Cargo Logistics</small>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link nav-link-brand ${active === link.id ? "active" : ""}`}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0" aria-hidden="true">
                <div className="navbar-years-badge">
                  <span className="navbar-years-num">25+</span>
                  <span className="navbar-years-txt">
                    Years
                    <br />
                    Of Trust
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
