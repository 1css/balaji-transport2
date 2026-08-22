import { Link, useParams } from "react-router-dom";
import { careerInfo, careerRoles } from "../data/siteData";
import "./CareerRoleDetail.css";

export default function CareerRoleDetail() {
  const { slug } = useParams();
  const role = careerRoles.find((r) => r.slug === slug);

  if (!role) {
    return (
      <section className="section-pad career-detail-page">
        <div className="container-xl">
          <Link to="/" className="career-back-link">
            <i className="bi bi-arrow-left" />
            Back to Home
          </Link>
          <div className="career-detail-notfound">
            <h1 className="section-title">
              Role Not <span>Found</span>
            </h1>
            <p className="section-lede">
              We couldn&apos;t find that job opening. It may have closed, or the
              link may be incorrect.
            </p>
            <Link to="/" className="btn-brand mt-3">
              <i className="bi bi-house-door-fill" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const emailHref = `mailto:${role.email}?subject=${encodeURIComponent(
    `Job Application — ${role.title}`
  )}&body=${encodeURIComponent(
    `Hi Balaji Transports,\n\nI'm interested in the ${role.title} position. Please find my CV attached.\n\nThank you.`
  )}`;

  const whatsappHref = `https://wa.me/${role.whatsapp}?text=${encodeURIComponent(
    `Hi Balaji Transports, I'm interested in the ${role.title} position and would like to share my CV.`
  )}`;

  return (
    <section className="section-pad career-detail-page">
      <div className="container-xl">
        <Link to="/" className="career-back-link">
          <i className="bi bi-arrow-left" />
          Back to Home
        </Link>

        <div className="career-detail-header">
          <div className="career-detail-icon">
            <i className={`bi ${role.icon}`} />
          </div>
          <div>
            <div className="eyebrow">Careers &mdash; {careerInfo.location}</div>
            <h1 className="section-title">{role.title}</h1>
            <p className="section-lede">{role.description}</p>
          </div>
        </div>

        <div className="row g-4 career-detail-body">
          <div className="col-lg-7">
            <div className="career-detail-card">
              <h2 className="career-detail-heading">Requirements</h2>
              <ul className="career-detail-req-list">
                {role.details.requirements.map((req) => (
                  <li key={req.label}>
                    <span className="req-label">{req.label}</span>
                    <span className="req-value">{req.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="career-detail-card">
              <h2 className="career-detail-heading">Documents Required</h2>
              <ul className="career-detail-doc-list">
                {role.details.documents.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>

            <div className="career-detail-card">
              <h2 className="career-detail-heading">Work Location</h2>
              <div className="safety-modal-row career-detail-location-row">
                <span className="icon">
                  <i className="bi bi-geo-alt-fill" />
                </span>
                <span>
                  <span className="label">Branch(es)</span>
                  <span className="value">{role.details.location}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="career-detail-apply-card">
              <h2 className="career-detail-heading">Ready To Apply?</h2>
              <p>
                Send us your CV by email or WhatsApp and our HR team will get
                in touch with you.
              </p>
              <div className="career-detail-actions">
                <a href={emailHref} className="btn-brand">
                  <i className="bi bi-envelope-fill" />
                  Email Your CV
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-brand career-whatsapp-btn"
                >
                  <i className="bi bi-whatsapp" />
                  WhatsApp Us
                </a>
              </div>
              <p className="career-detail-contact-note">
                Phone: <a href={`tel:${role.phone.replace(/[^+\d]/g, "")}`}>{role.phone}</a>
                <br />
                Email: <a href={`mailto:${role.email}`}>{role.email}</a>
                <br />
                WhatsApp:{" "}
                <a href={`https://wa.me/${role.whatsapp}`} target="_blank" rel="noreferrer">
                  {role.phone}
                </a>
              </p>
            </div>

            <Link to="/" className="career-back-link career-back-link-bottom">
              <i className="bi bi-arrow-left" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
