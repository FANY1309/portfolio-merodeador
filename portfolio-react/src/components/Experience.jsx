import { experience } from '../data/portfolioData';
import LocationCard from './LocationCard';
import SectionSeparator from './SectionSeparator';

function Experience() {
  return (
    <section id="experiencia">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Experiencia Profesional</h2>
      <p className="section-subline reveal">— Gestión de equipos, atención al cliente y orientación a objetivos —</p>

      <div className="two-col">
        {experience.map((item) => (
          <LocationCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
