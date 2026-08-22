import { fleetPhotos } from "../data/siteData";
import "./FleetGallery.css";

export default function FleetGallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-7">
            <div className="eyebrow">Our Fleet</div>
            <h2 className="section-title">
              Built To Move <span>Heavy Cargo</span>
            </h2>
            <p className="section-lede">
              A growing fleet of trailers, cranes and forklifts, purpose-built
              for high-volume steel and industrial logistics across
              Karnataka.
            </p>
          </div>
        </div>

        <div className="fleet-grid">
          {fleetPhotos.map((item) =>
            item.type === "photo" ? (
              <div className={`fleet-tile ${item.size}`} key={item.id}>
                <img src={item.image} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ) : (
              <div className={`fleet-tile icon-tile ${item.size}`} key={item.id}>
                <i className={`bi ${item.icon}`} />
                <div className="caption">
                  {item.caption}
                  <div className="sub">{item.sub}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
