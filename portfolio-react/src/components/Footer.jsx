import { navItems, socialLinks } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="map-footer">
      <nav className="footer-nav" aria-label="Navegación del pie de página">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="footer-social" aria-label="Redes profesionales">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>

      <p>Estefanía Martínez Henríquez — Desarrollo Web Junior</p>
      <p><em>Portfolio profesional actualizado.</em></p>
    </footer>
  );
}

export default Footer;
