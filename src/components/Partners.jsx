import { partners } from "../data/siteData";
import "./Partners.css";

export default function Partners() {
  return (
    <section className="section-pad bg-surface" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <div className="container-xl">
        <div className="text-center mb-4">
          <div className="eyebrow justify-content-center">Our Partners</div>
        </div>
        <div className="partners-strip">
          {partners.map((p) => (
            <img key={p.id} src={p.image} alt={`Partner ${p.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
