import * as actionTypes from './actions';

const initalState = {
  datetime: undefined,
  temperature: undefined,
  description: undefined,
  icon: undefined,
  error: undefined,
  forecastData: [],
  searchWeatherCityInput: '',
  searchWeatherCountryInput: '',
  searchForecastCityInput: '',
  searchForecastCountryInput: ''
};

const reducer = (state = initalState, action) => {
  console.log('Reducer Actions', action);
  switch (action.type) {
    case actionTypes.SEARCH_FORECASTCITY_INPUT:
      return Object.assign({}, state, {
        searchForecastCityInput: action.cityvalue
      });
    case actionTypes.SEARCH_FORECASTCOUNTRY_INPUT:
      return Object.assign({}, state, {
        searchForecastCountryInput: action.countryvalue
      });
    case actionTypes.GET_FORECAST_SUCCESS:
      return Object.assign({}, state, {
        forecastData: action.forecastData,
        error: ''
      });
    case actionTypes.GET_FORECAST_FAIL:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
};

export default reducer;
