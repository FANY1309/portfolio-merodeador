import { skills } from '../data/portfolioData';
import SectionSeparator from './SectionSeparator';

function Skills() {
  return (
    <section id="habilidades">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Habilidades Técnicas</h2>
      <p className="section-subline reveal">— Tecnologías, herramientas y competencias digitales —</p>

      <div className="skills-compass reveal">
        {skills.map((skill) => (
          <div className="skill-rune" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
