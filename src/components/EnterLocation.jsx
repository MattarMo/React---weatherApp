import React from 'react';
import PropTypes from 'prop-types';

const EnterLocation = props => {
  return (
    <form onSubmit={props.apiGetWeatherCall}>
      <input type="text" name="city" placeholder="Enter your city" />
      <input type="text" name="country" placeholder="Enter your country" />
      <button>Get Current Weather</button>
    </form>
  );
};

EnterLocation.propTypes = {
  apiGetWeatherCall: PropTypes.func.isRequired
};

export default EnterLocation;
