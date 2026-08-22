import { whatsappNumber } from "../data/siteData";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Balaji Transports, I'd like to enquire about your transport / crane services."
  );
  const href = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp" />
      <span className="label">Chat on WhatsApp</span>
    </a>
  );
}
