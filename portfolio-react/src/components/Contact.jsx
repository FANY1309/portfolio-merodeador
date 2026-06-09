import SectionSeparator from './SectionSeparator';

function Contact() {
  return (
    <section id="contacto">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Contacto</h2>
      <p className="section-subline reveal">— Disponible para oportunidades y colaboraciones —</p>

      <div className="contact-list reveal">
        <div className="contact-item">
          <span className="contact-icon">✉</span>
          <span className="contact-text">
            <a href="mailto:estefania.marhen@gmail.com">estefania.marhen@gmail.com</a>
          </span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">☎</span>
          <span className="contact-text">682 812 311</span>
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
