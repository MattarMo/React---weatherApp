import React from 'react';
import renderer from 'react-test-renderer';
import Forecast from './Components/ForeCastWeather/Forecast.jsx';
import Weather from './Components/CurrentWeather/Weather.jsx';

describe('Forecast.Weather Components', () => {
  it('Forecast component matches snapshot', () => {
    const tree = renderer.create(<Forecast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Weather component matches snapshot', () => {
    const tree = renderer.create(<Weather />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
