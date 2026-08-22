import { Link } from "react-router-dom";
import { careerRoles } from "../data/siteData";
import "./Careers.css";

export default function Careers() {
  return (
    <section id="careers" className="section-pad bg-surface">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-7">
            <div className="eyebrow">Careers</div>
            <h2 className="section-title">
              Build Your Career <span>With Balaji Transports</span>
            </h2>
            <p className="section-lede">
              We're always looking for reliable, hard-working people to join our
              team across Karnataka &mdash; from the road to the yard to the
              branch office. Tap a role to see requirements and apply.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {careerRoles.map((role) => (
            <div className="col-md-6 col-lg-4" key={role.id}>
              <Link to={`/careers/${role.slug}`} className="safety-card career-role-card">
                <div className="icon-badge">
                  <i className={`bi ${role.icon}`} />
                </div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                {/* <p className="career-role-contact">
                  <i className="bi bi-telephone-fill" /> {role.phone}
                  <br />
                  <i className="bi bi-envelope-fill" /> {role.email}
                </p> */}
                <span className="career-role-cta">
                  View Requirements <i className="bi bi-arrow-right" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
