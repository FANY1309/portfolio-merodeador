function LocationCard({ tag, title, period, description, marker = '📍' }) {
  return (
    <div className="location-card reveal">
      <p className="card-location-tag">
        {marker} {tag}
      </p>
      <h3 className="card-title">{title}</h3>
      {period && <p className="card-period">{period}</p>}
      <p className="card-desc">{description}</p>
    </div>
  );
}

export default LocationCard;
