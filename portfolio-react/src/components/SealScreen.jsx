function SealScreen({ isOpen, onOpen }) {
  return (
    <div
      id="seal-screen"
      className={isOpen ? 'vanish' : ''}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') onOpen();
      }}
      role="button"
      tabIndex={0}
      aria-label="Entrar al portfolio"
    >
      <div className="seal-wrapper">
        <svg className="seal-svg" viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sealGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c8a044" />
              <stop offset="60%" stopColor="#8b5e0a" />
              <stop offset="100%" stopColor="#3a1a00" />
            </radialGradient>
            <filter id="roughen">
              <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          <circle cx="170" cy="170" r="155" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
          <circle cx="170" cy="170" r="148" fill="none" stroke="#8b6000" strokeWidth="0.8" opacity="0.4" />
          <circle cx="170" cy="170" r="138" fill="url(#sealGrad)" filter="url(#roughen)" />
          <circle cx="170" cy="170" r="138" fill="none" stroke="#c8a044" strokeWidth="2.5" />
          <circle cx="170" cy="170" r="128" fill="none" stroke="#8b5e0a" strokeWidth="1" />

          <g stroke="#c8a044" strokeWidth="1.5" opacity="0.7">
            <line x1="170" y1="32" x2="170" y2="52" />
            <line x1="170" y1="288" x2="170" y2="308" />
            <line x1="32" y1="170" x2="52" y2="170" />
            <line x1="288" y1="170" x2="308" y2="170" />
            <polygon points="170,26 165,42 170,38 175,42" fill="#c8a044" />
            <polygon points="170,314 165,298 170,302 175,298" fill="#c8a044" />
            <polygon points="26,170 42,165 38,170 42,175" fill="#c8a044" />
            <polygon points="314,170 298,165 302,170 298,175" fill="#c8a044" />
          </g>

          <circle cx="170" cy="170" r="110" fill="none" stroke="#5c3000" strokeWidth="0.5" opacity="0.4" />
          <circle cx="170" cy="170" r="95" fill="none" stroke="#5c3000" strokeWidth="0.5" opacity="0.3" />

          <path id="topArc" d="M 55,170 A 115,115 0 0,1 285,170" fill="none" />
          <text fontFamily="'IM Fell English', serif" fontStyle="italic" fontSize="13.5" fill="#f7d98a" stroke="#1b0d05" strokeWidth="0.6" paintOrder="stroke" letterSpacing="2">
            <textPath href="#topArc" startOffset="8%">Portfolio Profesional  ✦  Desarrollo Web Junior</textPath>
          </text>

          <path id="botArc" d="M 55,170 A 115,115 0 0,0 285,170" fill="none" />
          <text fontFamily="'IM Fell English', serif" fontStyle="italic" fontSize="12.5" fill="#f0c766" stroke="#1b0d05" strokeWidth="0.55" paintOrder="stroke" letterSpacing="1.25">
            <textPath href="#botArc" startOffset="10%">Responsive  ✦  Producción  ✦  Aprendizaje Continuo</textPath>
          </text>

          <text x="170" y="143" textAnchor="middle" fontFamily="'Cinzel Decorative', cursive" fontSize="19.5" fill="#ffe08a" stroke="#120804" strokeWidth="1.8" paintOrder="stroke" letterSpacing="0.35">
            ESTEFANÍA
          </text>
          <text x="170" y="170" textAnchor="middle" fontFamily="'Cinzel Decorative', cursive" fontSize="19.5" fill="#ffe08a" stroke="#120804" strokeWidth="1.8" paintOrder="stroke" letterSpacing="0.35">
            MARTÍNEZ
          </text>
          <text x="170" y="197" textAnchor="middle" fontFamily="'Cinzel Decorative', cursive" fontSize="19.5" fill="#ffe08a" stroke="#120804" strokeWidth="1.8" paintOrder="stroke" letterSpacing="0.35">
            HENRÍQUEZ
          </text>

          <line x1="64" y1="124" x2="276" y2="124" stroke="#b8860b" strokeWidth="1.1" opacity="0.78" />
          <line x1="64" y1="209" x2="276" y2="209" stroke="#b8860b" strokeWidth="1.1" opacity="0.78" />
          <text x="170" y="232" textAnchor="middle" fontFamily="'IM Fell English', serif" fontStyle="italic" fontSize="13" fill="#f7d98a" stroke="#120804" strokeWidth="0.9" paintOrder="stroke" letterSpacing="1.35">
            Desarrolladora Web
          </text>

          <g fill="none" stroke="#c8a044" strokeWidth="1" opacity="0.45">
            <path d="M110,110 Q115,105 120,110 Q115,115 110,110" />
            <path d="M230,110 Q225,105 220,110 Q225,115 230,110" />
            <path d="M110,230 Q115,235 120,230 Q115,225 110,230" />
            <path d="M230,230 Q225,235 220,230 Q225,225 230,230" />
          </g>

          <g opacity="0.25" fill="none" stroke="#c8a044" strokeWidth="1">
            <circle cx="170" cy="170" r="160" />
            <circle cx="170" cy="170" r="163" />
          </g>
        </svg>

        <p className="seal-hint">— Toca para entrar al portfolio —</p>
      </div>
    </div>
  );
}

export default SealScreen;
