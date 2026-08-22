import { testimonials } from "../data/siteData";
import "./Testimonials.css";

// Group testimonials into slides of 2 for a fuller carousel on desktop.
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Testimonials() {
  const slides = chunk(testimonials, 2);

  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7">
            <div className="eyebrow justify-content-center">Testimonials</div>
            <h2 className="section-title">
              What Says Our <span>Client</span>
            </h2>
          </div>
        </div>

        <div
          id="clientCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ marginBottom: "56px" }}
        >
          <div className="carousel-inner">
            {slides.map((slide, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <div className="row g-4 justify-content-center">
                  {slide.map((t) => (
                    <div className="col-md-6" key={t.id}>
                      <div className="testimonial-card">
                        <i className="bi bi-quote" />
                        <p className="quote">{t.quote}</p>
                        <div className="testimonial-person">
                          <div className="testimonial-avatar-icon">
                            <i className="bi bi-person-fill" />
                          </div>
                          <div>
                            <div className="name">{t.name}</div>
                            <div className="place">{t.place}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#clientCarousel"
            data-bs-slide="prev"
            style={{ width: "5%" }}
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#clientCarousel"
            data-bs-slide="next"
            style={{ width: "5%" }}
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
