import About from './About';
import Contact from './Contact';
import CornerDecorations from './CornerDecorations';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

function MapContainer({ isOpen }) {
  return (
    <div id="map-container" className={isOpen ? 'visible' : ''}>
      <div className="parchment-page">
        <div className="map-grid"></div>
        <CornerDecorations />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default MapContainer;
