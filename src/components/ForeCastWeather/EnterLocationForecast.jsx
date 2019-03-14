import React from 'react';
import PropTypes from 'prop-types';

const EnterLocationForecast = props => {
  return (
    <div className="container">
      <h2 className="align-text-top">{props.title}</h2>
      <form onSubmit={props.forecastGetWeatherCall}>
        <div className="form-group">
          <label htmlFor="City">City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="Enter your city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Enter your country"
          />
        </div>
        <button className="btn btn-primary btn-">Get Current Weather</button>
      </form>
    </div>
  );
};

EnterLocationForecast.propTypes = {
  title: PropTypes.string.isRequired,
  forecastGetWeatherCall: PropTypes.func
};

export default EnterLocationForecast;
