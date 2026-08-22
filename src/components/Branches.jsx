import { branches } from "../data/siteData";
import "./Branches.css";

export default function Branches() {
  return (
    <section id="branches" className="section-pad">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-7">
            <div className="eyebrow">Where We Operate</div>
            <h2 className="section-title">
              Our <span>Branches</span>
            </h2>
            <p className="section-lede">
              The head office is located in Tumkur, with sub-branches along
              our steel logistics route across Karnataka.
            </p>
          </div>
        </div>

        <div className="route-line">
          <div className="track" />
          <div className="row g-4">
            {branches.map((branch) => (
              <div className="col-md-6 col-lg-3" key={branch.id}>
                <div className="branch-stop">
                  <span className="pin" />
                  <h3>{branch.name}</h3>
                  <p>{branch.address}</p>
                  <a
                    className="phone"
                    href={`tel:+91${branch.contact.replace(/\D/g, "").slice(0, 10)}`}
                  >
                    {branch.contact}
                  </a>
                  <div className="mt-2">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: "0.82rem", color: "var(--steel)" }}
                    >
                      <i className="bi bi-geo-alt me-1" />
                      View on map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
