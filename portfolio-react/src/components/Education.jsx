import { education, languages } from '../data/portfolioData';
import LocationCard from './LocationCard';
import SectionSeparator from './SectionSeparator';

function Education() {
  return (
    <section id="formacion">
      <SectionSeparator />

      <h2 className="map-section-title reveal">Formación</h2>
      <p className="section-subline reveal">— Base técnica y aprendizaje continuo —</p>

      <div className="two-col">
        {education.map((item) => (
          <LocationCard key={item.title} {...item} marker="🎓" />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }} className="reveal">
        {languages.map((language) => (
          <div className="skill-rune" style={{ minWidth: '120px' }} key={language}>
            {language}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
