import React from 'react';
import PropTypes from 'prop-types';

function Weather(props) {
  const { title,
    weather,
    temperature } = props;

  return (
    <div>
      {title === 'Now' ?
        <h3 style={{ color: 'red' }}>
          {title}
        </h3> :
        <h3 style={{ color: '#48F' }}>
          {title}
        </h3>
      }
      <p>{weather} </p>
      <p>{temperature} &deg;C</p>
    </div>
  );
}

Weather.propTypes = {
  title: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default Weather;
