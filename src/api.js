import axios from 'axios';
import * as actionTypes from '../src/store/actions';

const API_KEY = '3958ce557d2539d832f7953ea777aa82';

function getForecast(dispatch, city, country) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=Imperial`
    )
    .then(res => {
      const weatherData = res.data;
      dispatch({
        type: actionTypes.GET_FORECAST_SUCCESS,
        forecastData: weatherData.list
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.GET_FORECAST_FAIL,
        error:
          'Please enter a city and country(must be a real and matching city to country)'
      });
    });
}

function getWeather(dispatch, city, country) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=Imperial`
    )
    .then(res => {
      const weatherData = res.data;
      dispatch({
        type: actionTypes.GET_WEATHER_SUCCESS,
        payload: {
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
          error: ''
        }
      });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.GET_WEATHER_FAIL,
        error:
          'Please enter a city and country(must be a real and matching city to country)'
      });
    });
}

export default {
  getWeather,
  getForecast
};
