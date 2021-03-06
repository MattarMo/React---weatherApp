import React from 'react';
import PropTypes from 'prop-types';

const DisplayForecast = props => {
  return (
    <div className="container">
      {props.error && <p className="text-danger">{props.error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date/Time</th>
            <th scope="col">Temperature</th>
            <th scope="col">WeatherIcon</th>
          </tr>
        </thead>
        <tbody>
          {props.forecastData.map(forecast => {
            return (
              <tr className="table" key={forecast.dt}>
                <td>{forecast.dt_txt}</td>
                <td>{forecast.main.temp}&deg;F</td>
                <td>
                  <img
                    src={`http://openweathermap.org/img/w/${
                      forecast.weather[0].icon
                    }.png`}
                    alt={forecast.dt_txt}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

DisplayForecast.propTypes = {
  forecastData: PropTypes.array,
  error: PropTypes.string
};

export default DisplayForecast;
