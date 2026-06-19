import PropTypes from 'prop-types';

function LocationCard({ tag, title, period, description, marker = '📍', url, linkLabel = 'Ver proyecto' }) {
  return (
    <div className="location-card reveal">
      <p className="card-location-tag">
        {marker} {tag}
      </p>
      <h3 className="card-title">{title}</h3>
      {period && <p className="card-period">{period}</p>}
      <p className="card-desc">{description}</p>
      {url && (
        <a className="project-seal-link" href={url} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      )}
    </div>
  );
}

LocationCard.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  period: PropTypes.string,
  description: PropTypes.string.isRequired,
  marker: PropTypes.string,
  url: PropTypes.string,
  linkLabel: PropTypes.string,
};

export default LocationCard;
