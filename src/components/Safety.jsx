import { useRef, useState } from "react";
import { safetyPoints } from "../data/siteData";
import { contactInfo } from "../data/siteData";
import "./Safety.css";

export default function Safety() {
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // Wait a tick for the <video> (now rendered with controls) to mount,
    // then start playback so the user doesn't have to click twice.
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section id="safety" className="section-pad bg-surface">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-7">
            <div className="eyebrow">Safety First</div>
            <h2 className="section-title">
              Safety Isn&apos;t A Checklist, <span>It&apos;s A Habit</span>
            </h2>
            <p className="section-lede">
              Moving heavy steel and industrial cargo safely, trip after
              trip, is how we've stayed a trusted partner for over two
              decades.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {safetyPoints.map((point) => (
            <div className="col-md-6 col-lg-4" key={point.id}>
              <div className="safety-card">
                <div className="icon-badge">
                  <i className={`bi ${point.icon}`} />
                </div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="safety-video-wrap">
              <div className="safety-video-copy">
                <div className="eyebrow">Watch &amp; Learn</div>
                <h3>Our Safety Guidelines, Explained</h3>
                <p>
                  A quick walkthrough of the loading, roping and on-road
                  protocols every Balaji crew follows &mdash; the same
                  training every driver and rigger completes before they
                  touch a job site.
                </p>
              </div>

              <div className={`safety-video-card ${isPlaying ? "is-playing" : ""}`}>
                {isPlaying ? (
                  <video
                    ref={videoRef}
                    className="safety-video-media"
                    src="/safety%20guidelines.mp4"
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <button
                    type="button"
                    className="safety-video-poster"
                    onClick={handlePlay}
                    aria-label="Play safety guidelines video"
                  >
                    <span className="safety-video-glow" aria-hidden="true" />
                    <span className="safety-video-play">
                      <i className="bi bi-play-fill" />
                    </span>
                    <span className="safety-video-label">
                      <i className="bi bi-shield-fill-check" />
                      Safety Guidelines Video
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="safety-banner">
          <div className="msg">
            <i className="bi bi-shield-fill-check" />
            <div>
              <h4>Every load. Every route. Every time.</h4>
              <p>Our drivers and crews follow the same safety standard at all five branches.</p>
            </div>
          </div>
          <button
            type="button"
            className="btn-outline-brand"
            style={{ borderColor: "rgba(255,255,255,0.6)" }}
            onClick={() => setShowModal(true)}
          >
            Talk To Our Safety Team
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="safety-modal-backdrop"
          onClick={() => setShowModal(false)}
        >
          <div
            className="safety-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="safety-modal-close"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            >
              <i className="bi bi-x-lg" />
            </button>

            <div className="safety-modal-icon">
              <i className="bi bi-shield-fill-check" />
            </div>

            <h3>Talk To Our Safety Team</h3>
            <p className="safety-modal-sub">
              Reach out any time &mdash; we&apos;re here to answer your safety
              and compliance questions.
            </p>

            <a
              href={`tel:${contactInfo.phone.replace(/[\s-]/g, "")}`}
              className="safety-modal-row"
            >
              <span className="icon">
                <i className="bi bi-telephone-fill" />
              </span>
              <span>
                <span className="label">Call Us</span>
                <span className="value">{contactInfo.phone}</span>
              </span>
            </a>

            <a href={`mailto:${contactInfo.email}`} className="safety-modal-row">
              <span className="icon">
                <i className="bi bi-envelope-fill" />
              </span>
              <span>
                <span className="label">Email Us</span>
                <span className="value">{contactInfo.email}</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
