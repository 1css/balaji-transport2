import { awards } from "../data/siteData";
import "./Awards.css";

export default function Awards() {
  return (
    <section id="awards" className="section-pad">
      <div className="container-xl">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-7">
            <div className="eyebrow amber justify-content-center">Recognition</div>
            <h2 className="section-title">
              Awards &amp; <span>Milestones</span>
            </h2>
            <p className="section-lede mx-auto">
              A few of the milestones we're proud of, earned through
              consistent, safe and reliable service.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {awards.map((award) => (
            <div className="col-md-6 col-lg-3" key={award.id}>
              <div className="award-card">
                <div className="medal">
                  <i className={`bi ${award.icon}`} />
                </div>
                <h3>{award.title}</h3>
                <div className="issuer">{award.issuer}</div>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <p className="award-note">
          Award details are illustrative placeholders — replace with your
          actual certificates and issuing bodies.
        </p> */}
      </div>
    </section>
  );
}
