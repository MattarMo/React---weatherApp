/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const EnterLocation = props => {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <form
        onSubmit={e =>
          // eslint-disable-next-line react/prop-types
          props.getWeather(e, props.cityvalue, props.countryvalue)
        }
      >
        <div className="form-group">
          <label htmlFor="City">City</label>
          <input
            onChange={props.inputchangecity}
            value={props.cityvalue}
            className="form-control"
            type="text"
            name="city"
            placeholder="Enter your city"
            autoFocus={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            onChange={props.inputchangecountry}
            value={props.countryvalue}
            className="form-control"
            type="text"
            name="country"
            placeholder="Enter your country"
          />
        </div>
        <button className="btn btn-primary">Get Current Weather</button>
      </form>
    </div>
  );
};

EnterLocation.propTypes = {
  title: PropTypes.string.isRequired,
  currentGetWeatherCall: PropTypes.func
};

export default EnterLocation;
