import { useEffect } from 'react';

const footSymbols = ['·', '∙', '•', '◦'];

function useFootstepTrail(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    let stepCount = 0;

    function handleMouseMove(event) {
      stepCount += 1;
      if (stepCount % 8 !== 0) return;

      const dot = document.createElement('span');
      dot.className = 'footstep';
      dot.textContent = footSymbols[Math.floor(Math.random() * footSymbols.length)];
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
      document.body.appendChild(dot);

      setTimeout(() => dot.remove(), 1500);
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);
}

export default useFootstepTrail;
