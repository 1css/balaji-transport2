import { services } from "../data/siteData";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-7">
            <div className="eyebrow">What We Do</div>
            <h2 className="section-title">
              Our <span>Services</span>
            </h2>
            <p className="section-lede mb-5">
              From heavy trailers to high-capacity cranes, our growing fleet
              enables us to move high volumes of cargo across Karnataka,
              safely and on schedule.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, i) => (
            <div className="col-md-6" key={service.id}>
              <div className="service-card">
                <div className="service-media">
                  <span className="service-index">0{i + 1}</span>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p className="section-lede" style={{ fontSize: "0.94rem" }}>
                    {service.description}
                  </p>

                  {service.productHeading ? (
                    <div className="service-lists">
                      <div className="service-list-col">
                        <ul>
                          {service.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-list-col">
                        <h4>{service.productHeading}</h4>
                        <ul>
                          {service.productList.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <ul className="service-list-single">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
