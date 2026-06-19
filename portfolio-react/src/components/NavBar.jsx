import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { navItems } from '../data/portfolioData';

function NavBar({ isOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) setMenuOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeWithEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeWithEscape);
    return () => document.removeEventListener('keydown', closeWithEscape);
  }, [menuOpen]);

  return (
    <nav
      id="main-nav"
      className={menuOpen ? 'menu-open' : ''}
      aria-label="Navegación principal"
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <button
        className="nav-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="main-nav-links"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span className="nav-toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div id="main-nav-links" className="main-nav-links">
        {navItems.map((item, index) => (
          <span className="nav-item" key={item.href}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
            {index < navItems.length - 1 && <span className="sep">✦</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavBar;
