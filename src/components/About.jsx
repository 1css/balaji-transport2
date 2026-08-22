import { cargoProducts } from "../data/siteData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-xl">
        {/* Centered section heading */}
        <div className="about-heading">
          <div className="eyebrow">About Us</div>
        </div>

        <div className="row align-items-stretch g-5">
          {/* Image */}
          <div className="col-lg-5 d-flex">
            <div className="about-media">
              <img src="/logo.jpeg" alt="Balaji Transports steel cargo fleet" />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7 d-flex">
            <div className="about-copy">
              <p className="section-lede mb-4">
                Balaji Transports has been operating since the year 2000 as a
                logistics service provider, offering end-to-end logistic
                solutions for distributors, retailers, projects and
                manufacturing companies. We presently operate five branches in
                Karnataka — head office in Tumkur, with sub-branches in Hosur,
                Maddur, Toranagallu and Whitefield Bangalore.
              </p>

              <p className="section-lede mb-4">
                We operate road logistics for JSW Steel Ltd (Toranagallu),
                distributing steel to destinations across Karnataka. Backed by
                20 years of experience, we provide comprehensive rake
                transportation, cargo handling and clearing services, with
                primary operations stationed at the SGWF (Whitefield) and Hosur
                (HSRA) railway sidings.
              </p>

              <h3 className="about-subtitle">Specialized Cargo Handling</h3>

              <ul className="cargo-grid">
                {cargoProducts.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check2-circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
