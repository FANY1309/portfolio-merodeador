import { skills, softSkills } from '../data/portfolioData';
import SectionSeparator from './SectionSeparator';

function Skills() {
  return (
    <section id="habilidades">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Habilidades Técnicas</h2>
      <p className="section-subline reveal">— Tecnologías, herramientas y competencias digitales —</p>

      <div className="skills-block reveal">
        <h3 className="skills-block-title">Hard Skills</h3>
        <div className="skills-compass">
          {skills.map((skill) => (
            <div className="skill-rune" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-block reveal">
        <h3 className="skills-block-title">Soft Skills</h3>
        <div className="skills-tag-list">
          {softSkills.map((skill) => (
            <span className="soft-skill-item" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
