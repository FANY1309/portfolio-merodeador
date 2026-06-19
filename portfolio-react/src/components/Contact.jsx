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
        <div className="contact-item">
          <span className="contact-icon">✉</span>
          <span className="contact-text">
            <a href={gmailUrl} target="_blank" rel="noreferrer" aria-label={`Escribir a ${contactInfo.email} en Gmail`}>
              {contactInfo.email}
            </a>
          </span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">☎</span>
          <span className="contact-text contact-phone">
            <a href={`tel:${contactInfo.phoneInternational}`} aria-label={`Llamar al ${contactInfo.phoneLabel}`}>
              {contactInfo.phoneLabel}
            </a>
            <span className="contact-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Escribir por WhatsApp al ${contactInfo.phoneLabel}`}
              >
                WhatsApp
              </a>
              <a
                href={`tel:${contactInfo.phoneInternational}`}
                aria-label={`Llamar al ${contactInfo.phoneLabel}`}
              >
                Llamar
              </a>
            </span>
          </span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">⌥</span>
          <span className="contact-text">
            <a href="https://github.com/FANY1309" target="_blank" rel="noreferrer">
              github.com/FANY1309
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
