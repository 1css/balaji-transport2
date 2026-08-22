import { contactInfo } from "../data/siteData";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-ink">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-3">
            <h2 className="section-title on-dark">
              Contact <span>Us</span>
            </h2>
            <p className="section-lede mx-auto" style={{ color: "#b7c3d4" }}>
              {contactInfo.infoText}
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-item">
              <span className="icon">
                <i className="bi bi-geo-alt-fill" />
              </span>
              <div>
                <h4>Address</h4>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="icon">
                <i className="bi bi-telephone-fill" />
              </span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="icon">
                <i className="bi bi-envelope-fill" />
              </span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-frame mt-5">
        <iframe
          src={contactInfo.mapEmbed}
          title="Balaji Transports location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
