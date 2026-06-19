import PropTypes from 'prop-types';

function CornerSvg({ showNorth = false }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5,5 L35,5 M5,5 L5,35" stroke="#2b1a0e" strokeWidth="2" />
      <path d="M5,5 Q20,5 20,20 Q20,35 35,35" stroke="#2b1a0e" strokeWidth="1" fill="none" />
      <circle cx="5" cy="5" r="3" fill="#2b1a0e" />
      {showNorth && (
        <>
          <path d="M12,12 L28,12 M12,12 L12,28" stroke="#2b1a0e" strokeWidth="1" opacity="0.5" />
          <text x="40" y="18" fontFamily="serif" fontSize="9" fill="#2b1a0e" opacity="0.4">
            N
          </text>
          <path d="M42,22 L42,8 M39,11 L42,8 L45,11" stroke="#2b1a0e" strokeWidth="1" fill="none" opacity="0.4" />
        </>
      )}
    </svg>
  );
}

CornerSvg.propTypes = {
  showNorth: PropTypes.bool,
};

function CornerDecorations() {
  return (
    <>
      <div className="corner-deco tl">
        <CornerSvg showNorth />
      </div>
      <div className="corner-deco tr">
        <CornerSvg />
      </div>
      <div className="corner-deco bl">
        <CornerSvg />
      </div>
      <div className="corner-deco br">
        <CornerSvg />
      </div>
    </>
  );
}

export default CornerDecorations;
