import { useEffect } from 'react';

function useActiveNav(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#main-nav a');

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.style.borderColor = 'transparent';
            });

            const active = document.querySelector(`#main-nav a[href="#${entry.target.id}"]`);
            if (active) active.style.borderColor = 'var(--seal-gold)';
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' },
    );

    sections.forEach((section) => navObserver.observe(section));

    return () => navObserver.disconnect();
  }, [enabled]);
}

export default useActiveNav;
