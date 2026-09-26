import { useEffect, useState } from "react";
import { brochures, whatsappNumber } from "../data/siteData";
import "./Brochures.css";

export default function Brochures() {
  const [preview, setPreview] = useState(null);

  // Close the viewer on Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preview]);

  // Phones/tablets can't render PDFs inside an iframe reliably,
  // so on small screens "View" opens the PDF in a new tab instead.
  const openPreview = (brochure) => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      window.open(brochure.file, "_blank", "noopener");
      return;
    }
    setPreview(brochure);
  };

  const printedCopyLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Balaji Transports, I would like a printed copy of your brochure."
  )}`;

  return (
    <section id="brochures" className="section-pad brochures-section">
      <div className="container-xl">
        <div className="row align-items-end g-4 mb-4 mb-lg-5">
          <div className="col-lg-7">
            <div className="eyebrow">Brochures</div>
            <h2 className="section-title">
              Download Our <span>Brochures</span>
            </h2>
            <p className="section-lede mb-0">
              Everything you need to know about our trailer fleet, crane
              services and branch network — ready to view, download and share
              with your team.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-lg-end">
            <div className="brochure-quick">
              <i className="bi bi-file-earmark-pdf-fill" />
              <div>
                <strong>{brochures.length} PDF brochures</strong>
                <span>Free download · Print-ready A4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {brochures.map((b) => (
            <div className="col-md-6 col-lg-4" key={b.id}>
              <article className={`brochure-card ${b.featured ? "is-featured" : ""}`}>
                <button
                  type="button"
                  className="brochure-cover"
                  onClick={() => openPreview(b)}
                  aria-label={`Preview ${b.title}`}
                >
                  <img src={b.cover} alt={`${b.title} brochure cover`} loading="lazy" />
                  <span className="brochure-cover-overlay">
                    <i className="bi bi-eye" /> Quick View
                  </span>
                  {b.featured && <span className="brochure-ribbon">Most Popular</span>}
                </button>

                <div className="brochure-body">
                  <div className="brochure-tag">
                    <i className={`bi ${b.icon}`} />
                    {b.tag}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>

                  <ul className="brochure-meta">
                    <li>
                      <i className="bi bi-filetype-pdf" /> PDF
                    </li>
                    <li>
                      <i className="bi bi-files" /> {b.pages} pages
                    </li>
                    <li>
                      <i className="bi bi-hdd" /> {b.size}
                    </li>
                  </ul>

                  <div className="brochure-actions">
                    <button
                      type="button"
                      className="brochure-btn ghost"
                      onClick={() => openPreview(b)}
                    >
                      <i className="bi bi-eye" /> View
                    </button>
                    <a className="brochure-btn solid" href={b.file} download>
                      <i className="bi bi-download" /> Download
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="brochure-cta">
          <div className="brochure-cta-text">
            <i className="bi bi-printer" />
            <div>
              <strong>Need a printed copy or a custom quote?</strong>
              <span>Message us on WhatsApp and our team will get back to you.</span>
            </div>
          </div>
          <a className="brochure-btn whatsapp" href={printedCopyLink} target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {preview && (
        <div
          className="brochure-modal-backdrop"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} preview`}
        >
          <div className="brochure-modal" onClick={(e) => e.stopPropagation()}>
            <div className="brochure-modal-head">
              <div>
                <span className="brochure-modal-tag">{preview.tag}</span>
                <h4>{preview.title}</h4>
              </div>
              <div className="brochure-modal-actions">
                <a className="brochure-btn solid sm" href={preview.file} download>
                  <i className="bi bi-download" /> <span>Download</span>
                </a>
                <a className="brochure-btn ghost-dark sm" href={preview.file} target="_blank" rel="noreferrer">
                  <i className="bi bi-box-arrow-up-right" /> <span>Open</span>
                </a>
                <button
                  type="button"
                  className="brochure-modal-close"
                  onClick={() => setPreview(null)}
                  aria-label="Close preview"
                >
                  <i className="bi bi-x-lg" />
                </button>
              </div>
            </div>
            <iframe
              className="brochure-frame"
              src={`${preview.file}#view=FitH&toolbar=0`}
              title={preview.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}
