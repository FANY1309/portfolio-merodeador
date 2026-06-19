import SectionSeparator from './SectionSeparator';
import { contactInfo } from '../data/portfolioData';

function Contact() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}`;
  const whatsappUrl = `https://wa.me/${contactInfo.phoneInternational.replace(/\D/g, '')}`;

  return (
    <section id="contacto">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Contacto</h2>
      <p className="section-subline reveal">— Disponible para oportunidades y colaboraciones —</p>

      <div className="contact-list reveal">
        <a
          className="contact-button"
          href={gmailUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Escribir a ${contactInfo.email} en Gmail`}
        >
          <span className="contact-button-icon" aria-hidden="true">✉</span>
          <span className="contact-button-text">
            <strong>Enviar un correo</strong>
            <small>{contactInfo.email}</small>
          </span>
          <span className="contact-button-arrow" aria-hidden="true">›</span>
        </a>

        <a
          className="contact-button"
          href={`tel:${contactInfo.phoneInternational}`}
          aria-label={`Llamar al ${contactInfo.phoneLabel}`}
        >
          <span className="contact-button-icon" aria-hidden="true">☎</span>
          <span className="contact-button-text">
            <strong>Llamar ahora</strong>
            <small>{contactInfo.phoneLabel}</small>
          </span>
          <span className="contact-button-arrow" aria-hidden="true">›</span>
        </a>

        <a
          className="contact-button contact-button-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Escribir por WhatsApp al ${contactInfo.phoneLabel}`}
        >
          <span className="contact-button-icon" aria-hidden="true">☏</span>
          <span className="contact-button-text">
            <strong>Abrir WhatsApp</strong>
            <small>{contactInfo.phoneLabel}</small>
          </span>
          <span className="contact-button-arrow" aria-hidden="true">›</span>
        </a>

        <a
          className="contact-button"
          href="https://github.com/FANY1309"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar el perfil de GitHub de FANY1309"
        >
          <span className="contact-button-icon" aria-hidden="true">⌘</span>
          <span className="contact-button-text">
            <strong>Visitar GitHub</strong>
            <small>github.com/FANY1309</small>
          </span>
          <span className="contact-button-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
