function Hero() {
  return (
    <section id="hero">
      <svg
        viewBox="0 0 320 90"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 'min(320px,80vw)', opacity: 0.35, marginBottom: '0.5rem' }}
      >
        <g stroke="#2b1a0e" strokeWidth="1.2" fill="none">
          <polyline points="10,80 10,50 20,50 20,40 30,40 30,50 50,50 50,30 60,30 60,50 80,50 80,40 90,40 90,50 100,50 100,80" />
          <polyline points="100,80 100,45 115,45 115,25 130,25 130,45 150,45 150,20 165,15 180,20 180,45 200,45 200,25 215,25 215,45 230,45 230,80" />
          <polyline points="230,80 230,50 240,50 240,40 250,40 250,50 270,50 270,35 280,35 280,50 300,50 300,80" />
          <line x1="60" y1="30" x2="60" y2="8" />
          <polyline points="60,8 72,12 60,16" />
          <line x1="165" y1="15" x2="165" y2="0" />
          <polyline points="165,0 177,4 165,8" />
          <line x1="280" y1="35" x2="280" y2="15" />
          <polyline points="280,15 292,19 280,23" />
          <rect x="54" y="34" width="5" height="7" rx="2" />
          <rect x="158" y="28" width="5" height="7" rx="2" />
          <rect x="274" y="39" width="5" height="7" rx="2" />
          <line x1="0" y1="80" x2="320" y2="80" strokeWidth="1.5" />
          <path d="M15,80 Q12,68 15,60 Q18,68 15,80" fill="rgba(43,26,14,0.25)" />
          <path d="M305,80 Q302,65 305,55 Q308,65 305,80" fill="rgba(43,26,14,0.25)" />
        </g>
      </svg>

      <p className="messrs-line">— Desarrolladora Web Junior —</p>

      <h1 className="hero-name">
        Estefanía
        <br />
        Martínez Henríquez
      </h1>

      <div className="ribbon-divider">
        <span>✦</span>
      </div>

      <p className="hero-subtitle">
        Desarrollo interfaces web responsive y soluciones digitales funcionales.
        <br />
        <em>Front-end · Full-stack · Orientada al detalle</em>
      </p>

      <a className="scroll-ribbon" href="#sobre-mi">
        ↓ &nbsp; Explorar portfolio &nbsp; ↓
      </a>
    </section>
  );
}

export default Hero;
