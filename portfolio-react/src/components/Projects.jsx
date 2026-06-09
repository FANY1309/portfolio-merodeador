import { projects } from '../data/portfolioData';
import LocationCard from './LocationCard';
import SectionSeparator from './SectionSeparator';

function Projects() {
  return (
    <section id="proyectos">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Proyectos</h2>
      <p className="section-subline reveal">— Desarrollo web aplicado a proyectos reales —</p>

      {projects.map((project) => (
        <LocationCard key={project.title} {...project} />
      ))}
    </section>
  );
}

export default Projects;
