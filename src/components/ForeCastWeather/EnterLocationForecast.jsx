import React from 'react';
import PropTypes from 'prop-types';

const EnterLocationForecast = props => {
  return (
    <div className="container">
      <h2 className="align-text-top">{props.title}</h2>
      <form
        onSubmit={e =>
          // eslint-disable-next-line react/prop-types
          props.getForecast(e, props.cityvalue, props.countryvalue)
        }
      >
        <div className="form-group">
          <label htmlFor="City">City</label>
          <input
            onChange={props.inputchangecity}
            // eslint-disable-next-line react/prop-types
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
            // eslint-disable-next-line react/prop-types
            value={props.countryvalue}
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
  inputchangecity: PropTypes.func,
  inputchangecountry: PropTypes.func,
  //cityvalue: PropTypes.func,
  //countryvalue: PropTypes.func,
  getForecast: PropTypes.func.isRequired
};

export default EnterLocationForecast;
