import SectionSeparator from './SectionSeparator';

function About() {
  return (
    <section id="sobre-mi">
      <SectionSeparator />

      <h2 className="map-section-title long-section-title reveal">
        <span>Perfil Profesional</span>
      </h2>
      <p className="section-subline reveal">— Desarrollo web, comunicación y orientación a resultados —</p>

      <p className="about-text reveal">
        Desarrolladora Web Junior con experiencia en el desarrollo completo de aplicaciones y sitios web, participando en todas las fases del proyecto: análisis, diseño, implementación, pruebas y despliegue. Mi experiencia previa en gestión de equipos y atención al cliente me ha permitido desarrollar habilidades de comunicación, organización y liderazgo que aportan valor al trabajo técnico. Soy una persona curiosa, resolutiva y con gran capacidad de aprendizaje, acostumbrada a afrontar nuevos retos y a buscar soluciones de forma autónoma.
      </p>

      <div className="path-dots">· · · · · · · · · · · · · · · · · ·</div>

      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', margin: '1.5rem auto', width: '80px', opacity: 0.4 }}
      >
        <circle cx="60" cy="60" r="55" fill="none" stroke="#2b1a0e" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="45" fill="none" stroke="#2b1a0e" strokeWidth="0.8" />
        <line x1="60" y1="15" x2="60" y2="105" stroke="#2b1a0e" strokeWidth="1" />
        <line x1="15" y1="60" x2="105" y2="60" stroke="#2b1a0e" strokeWidth="1" />
        <polygon points="60,18 56,40 60,36 64,40" fill="#7a1c1c" />
        <polygon points="60,102 56,80 60,84 64,80" fill="#2b1a0e" />
        <circle cx="60" cy="60" r="5" fill="#2b1a0e" />
        <text x="60" y="10" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#2b1a0e">
          N
        </text>
        <text x="60" y="116" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#2b1a0e">
          S
        </text>
        <text x="8" y="63" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#2b1a0e">
          W
        </text>
        <text x="113" y="63" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#2b1a0e">
          E
        </text>
      </svg>
    </section>
  );
}

export default About;
