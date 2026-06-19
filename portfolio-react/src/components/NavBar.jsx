import PropTypes from 'prop-types';
import { navItems } from '../data/portfolioData';

function NavBar({ isOpen }) {
  return (
    <nav id="main-nav" style={{ opacity: isOpen ? 1 : 0 }}>
      {navItems.map((item, index) => (
        <span key={item.href} style={{ display: 'contents' }}>
          <a href={item.href}>{item.label}</a>
          {index < navItems.length - 1 && <span className="sep">✦</span>}
        </span>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default NavBar;
