import React from 'react';
import PropTypes from 'prop-types';

const EnterLocation = props => {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <form onSubmit={props.currentGetWeatherCall}>
        <input type="text" name="city" placeholder="Enter your city" />
        <br />
        <input type="text" name="country" placeholder="Enter your country" />
        <br />
        <button>Get Current Weather</button>
      </form>
    </div>
  );
};

EnterLocation.propTypes = {
  title: PropTypes.string.isRequired,
  currentGetWeatherCall: PropTypes.func
};

export default EnterLocation;
