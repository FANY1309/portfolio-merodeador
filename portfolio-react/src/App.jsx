import { useEffect, useState } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import NavBar from './components/NavBar';
import SealScreen from './components/SealScreen';
import useActiveNav from './hooks/useActiveNav';
import useRevealOnScroll from './hooks/useRevealOnScroll';

function App() {
  const [mapOpen, setMapOpen] = useState(false);
  const [sealHidden, setSealHidden] = useState(false);

  useRevealOnScroll(mapOpen);
  useActiveNav(mapOpen);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (!mapOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [mapOpen]);

  useEffect(() => {
    if (!mapOpen) return undefined;

    const hideSealTimer = setTimeout(() => {
      setSealHidden(true);
    }, 1400);

    return () => clearTimeout(hideSealTimer);
  }, [mapOpen]);

  return (
    <>
      {!sealHidden && <SealScreen isOpen={mapOpen} onOpen={() => setMapOpen(true)} />}
      <NavBar isOpen={mapOpen} />
      <MapContainer isOpen={mapOpen} />
    </>
  );
}

export default App;
