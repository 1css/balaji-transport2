import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { heroStats, heroHighlight, heroSlidesMedia, branches } from "../data/siteData";
import "./Hero.css";

const AUTOPLAY_MS = 6000;

// Full-bleed slide background: plays a muted looping video when one is
// configured, otherwise falls back to a still image. Renders nothing if
// neither is set, so plain (gradient-only) slides are unaffected.
function SlideBackground({ media, alt }) {
  if (!media || (!media.video && !media.image)) return null;

  return (
    <div className="hero-slide-bg" aria-hidden="true">
      {media.video ? (
        <video
          className="hero-slide-bg-media"
          src={media.video}
          poster={media.image || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <img
          className="hero-slide-bg-media"
          src={media.image}
          alt={alt || ""}
          loading="eager"
        />
      )}
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const slides = useMemo(
    () => [{ id: "intro" }, { id: "stats" }, { id: "branches" }, { id: "highlight" }],
    []
  );

  const goTo = useCallback(
    (index) => {
      setActive((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay — pauses on hover/focus and respects reduced-motion preference.
  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion, slides.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 45) prev();
    else if (delta < -45) next();
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="hero-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="hero-track"
          style={{
            transform: `translate3d(-${active * 100}%, 0, 0)`,
            transition: prefersReducedMotion ? "none" : undefined,
          }}
        >
          {/* Slide 1 — Intro (top-left aligned) */}
          <div className="hero-slide hero-slide--intro" aria-hidden={active !== 0}>
            <SlideBackground
              media={heroSlidesMedia.intro}
              alt="Balaji Transports fleet moving steel cargo across Karnataka"
            />
            <div className="container-xl">
              <div className="hero-slide-content hero-slide-content--topleft">
                <div className="hero-kicker">Trusted Since 2000 &mdash; Karnataka</div>
                <h1 className="hero-title">
                  We Move Steel.
                  <br />
                  We Move <span className="accent">Karnataka.</span>
                </h1>
                <p className="hero-sub">
                  End-to-end road logistics, rake transportation, cargo handling and
                  crane services &mdash; built for distributors, retailers, projects
                  and manufacturing companies across the state.
                </p>
                <div className="hero-cta">
                  <a href="tel:+919448275233" className="btn-brand">
                    Call : +91 94482 75233
                  </a>
                  <a
                    href="#services"
                    className="btn-outline-brand"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 — Stats (right side, stacked in a column) */}
          <div className="hero-slide" aria-hidden={active !== 1}>
            <SlideBackground
              media={heroSlidesMedia.stats}
              alt="Balaji Transports fleet on the highway"
            />
            <div className="container-xl">
              <div className="hero-slide-split">
                <div className="hero-slide-split-right hero-slide-split-right--solo">
                  <div className="hero-kicker">Why Karnataka Trusts Us</div>
                  <h2 className="hero-title hero-title-sm">
                    Three Decades Of <span className="accent">Consistent Delivery.</span>
                  </h2>
                  <div className="hero-stats-column">
                    {heroStats.map((stat) => (
                      <div className="hero-stat-col-item" key={stat.id}>
                        <div className="num">{stat.num}</div>
                        <div className="label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 — Branches (right column, slow auto-scroll top -> bottom) */}
          <div className="hero-slide" aria-hidden={active !== 2}>
            <SlideBackground
              media={heroSlidesMedia.branches}
              alt="Balaji Transports branch network across Karnataka"
            />
            <div className="container-xl">
              <div className="hero-slide-split hero-slide-split--branches">
                <div className="hero-slide-split-right hero-slide-split-right--solo">
                  <div className="hero-kicker">Where We Operate</div>
                  <h2 className="hero-title hero-title-sm">
                    5 Branches, <span className="accent">One Karnataka Network.</span>
                  </h2>

                  <div className="hero-branches-marquee">
                    <div className="hero-branches-marquee-fade hero-branches-marquee-fade--top" />
                    <div
                      className="hero-branches-track"
                      style={{ animationPlayState: prefersReducedMotion ? "paused" : undefined }}
                    >
                      {[...branches, ...branches].map((branch, i) => (
                        <div className="hero-branch-card" key={`${branch.id}-${i}`}>
                          <span className="pin">
                            <i className="bi bi-geo-alt-fill" />
                          </span>
                          <h3>{branch.name}</h3>
                          <p>{branch.address}</p>
                          <a
                            className="phone"
                            href={`tel:+91${branch.contact.replace(/\D/g, "").slice(0, 10)}`}
                          >
                            {branch.contact}
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="hero-branches-marquee-fade hero-branches-marquee-fade--bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 — Highlight */}
          <div className="hero-slide" aria-hidden={active !== 3}>
            <div className="container-xl">
              <div className="hero-slide-center">
                <div className="hero-kicker">{heroHighlight.kicker}</div>
                <div className="hero-highlight-num">
                  {heroHighlight.num}
                  <span>{heroHighlight.unit}</span>
                </div>
                <h2 className="hero-title hero-title-sm">{heroHighlight.title}</h2>
                <p className="hero-sub hero-sub-center">{heroHighlight.description}</p>
                <div className="hero-cta hero-cta-center">
                  <a href="tel:+919448275233" className="btn-brand">
                    Call : +91 94482 75233
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hero-arrow hero-arrow-prev"
          aria-label="Previous slide"
          onClick={prev}
        >
          <i className="bi bi-chevron-left" />
        </button>
        <button
          type="button"
          className="hero-arrow hero-arrow-next"
          aria-label="Next slide"
          onClick={next}
        >
          <i className="bi bi-chevron-right" />
        </button>

        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`hero-dot ${active === i ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
