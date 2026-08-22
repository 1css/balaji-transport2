import { team } from "../data/siteData";
import "./Team.css";

export default function Team() {
  return (
    <section id="team" className="section-pad bg-surface">
      <div className="container-xl">
        <div className="row justify-content-center text-center">
          <div className="col-lg-7">
            {/* <div className="eyebrow justify-content-center">Leadership</div> */}
            <h2 className="section-title">
               <span>Founder</span>
            </h2>
          </div>
        </div>

        <div className="row g-4 justify-content-center mt-3">
          {team.map((member) => (
            <div className="col-6 col-md-4 col-lg-3" key={member.id}>
              <div className="team-card">
                <img src={member.image} alt={member.name} className="team-photo" />
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
