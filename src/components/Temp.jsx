import { fleetPhotos } from "../data/siteData";

export default function FleetGallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-7">
            <div className="eyebrow">Our fleet</div>
            <h2 className="section-title">
              Built to move <span>heavy cargo</span>
            </h2>
            <p className="section-lede">
              A grow fleet of trailers, cranes and forklifts, purpose-built for
              high volume steel and industrial logistics across karnataka.
            </p>
          </div>
        </div>
        <div className="fleet-grid">
          {fleetPhotos.map((item) =>
            item.type === "photo" ? (
              <div className={`fleet-title ${item.size}`} key={item.id}>
                <img src={item.image} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ) : (
              <div
                className={`fleet-tile icon-tile ${item.size}`}
                key={item.id}
              >
                <i className={`bi ${item.icon}`} />
                <div className="caption">
                  {item.caption}
                  <div className="sub">{item.sub}</div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
