import axios from 'axios';

const API_KEY = '3958ce557d2539d832f7953ea777aa82';

function getForecast(dispatch, city, country) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=Imperial`
    )
    .then(res => {
      const weatherData = res.data;
      dispatch({
        type: 'GET_FORECAST_SUCCESS',
        forecastData: weatherData.list
      });
    })
    .catch(() => {
      dispatch({
        type: 'GET_FORECAST_FAIL',
        error: 'Invalid entry'
      });
    });
}

export default {
  getForecast
};
