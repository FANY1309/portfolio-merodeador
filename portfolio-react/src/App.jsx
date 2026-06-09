import { useEffect, useState } from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import NavBar from './components/NavBar';
import SealScreen from './components/SealScreen';
import useActiveNav from './hooks/useActiveNav';
import useFootstepTrail from './hooks/useFootstepTrail';
import useRevealOnScroll from './hooks/useRevealOnScroll';

function App() {
  const [mapOpen, setMapOpen] = useState(false);
  const [sealHidden, setSealHidden] = useState(false);

  useRevealOnScroll(mapOpen);
  useFootstepTrail(mapOpen);
  useActiveNav(mapOpen);

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
