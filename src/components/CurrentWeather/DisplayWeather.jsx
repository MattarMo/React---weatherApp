import React from 'react';
import PropTypes from 'prop-types';

const DisplayWeather = props => {
  return (
    <div className="container">
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.city && <p>City: {props.city}</p>}
      {props.country && <p>Country: {props.country}</p>}
      {props.error && <p className="text-danger"> {props.error}</p>}
    </div>
  );
};
DisplayWeather.propTypes = {
  temperature: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default DisplayWeather;
