import { useEffect } from 'react';

function useRevealOnScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 80);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, [enabled]);
}

export default useRevealOnScroll;
