import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FleetGallery from "../components/FleetGallery";
import Safety from "../components/Safety";
import Awards from "../components/Awards";
import Branches from "../components/Branches";
import Careers from "../components/Careers";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    const el = document.getElementById(targetId);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
    }
    // Clear the state so refreshing or navigating back doesn't re-trigger it.
    navigate(location.pathname, { replace: true, state: {} });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <FleetGallery />
      <Safety />
      {/* <Awards /> */}
      <Branches />
      <Careers />
      <Team />
      <Testimonials />
      <Partners />
      <Contact />
    </>
  );
}
