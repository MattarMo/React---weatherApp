import React from 'react';
import PropTypes from 'prop-types';

const EnterLocationForecast = props => {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <form onSubmit={props.forecastGetWeatherCall}>
        <input type="text" name="city" placeholder="Enter your city" />
        <br />
        <input type="text" name="country" placeholder="Enter your country" />
        <br />
        <button>Get 5 day weather forecast</button>
      </form>
    </div>
  );
};

EnterLocationForecast.propTypes = {
  title: PropTypes.string.isRequired,
  forecastGetWeatherCall: PropTypes.func.isRequired
};

export default EnterLocationForecast;
