/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const DisplayWeather = props => {
  return (
    <div className="container">
      {props.error && <p className="text-danger">{props.error}</p>}
      <table className="table">
        <thead>
          <tr>
            {props.temperature && <th scope="col">Current Temperature</th>}
            {props.description && <th scope="col">Description</th>}
            {props.icon && <th scope="col">WeatherIcon</th>}
          </tr>
        </thead>
        <tbody>
          <tr className="table">
            {props.temperature && <td>{props.temperature}&deg;F</td>}
            {props.description && <td>{props.description}</td>}
            {props.icon && (
              <td>
                <img
                  src={`http://openweathermap.org/img/w/${props.icon}.png`}
                  alt={props.temperature}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DisplayWeather.propTypes = {
  temperature: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string
};

export default DisplayWeather;
