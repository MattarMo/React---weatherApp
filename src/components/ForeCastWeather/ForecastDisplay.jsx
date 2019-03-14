import React from 'react';
import PropTypes from 'prop-types';

const ForecastDisplay = props => {
  console.log(props.forecastData);
  //const imgURL = 'http://openweathermap.org/img/w/';

  return (
    <div className="container">
      {props.error && <p className="text-danger">{props.error}</p>}
      {props.forecastData.map(forecast => {
        return (
          <div key={forecast.dt}>
            <p>{forecast.dt_txt}</p>
            <p>{forecast.main.temp}</p>
            <img
              src={`http://openweathermap.org/img/w/${
                forecast.weather[0].icon
              }.png`}
              alt={forecast.dt_txt}
            />
          </div>
        );
      })}
    </div>
  );
};

ForecastDisplay.propTypes = {
  forecastData: PropTypes.array.isRequired,
  error: PropTypes.string
};

export default ForecastDisplay;
