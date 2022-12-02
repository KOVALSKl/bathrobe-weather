import React, { useEffect } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { useGetCurrentWeatherQuery, useGetWeatherForecastQuery } from './redux/api/weatherApi';
import { useDispatch, useSelector } from 'react-redux';
import { updateForecast } from './redux/slices/currentForecastSlice';
import { updateWeather } from './redux/slices/currentWeatherSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';

function App() {

  const place = useSelector(state => state.search.value);

  const forecast = useGetWeatherForecastQuery({
    name: place,
    cnt: 0,
  });
  const weather = useGetCurrentWeatherQuery(place);

  const dispatch = useDispatch();

  useEffect(() => {
    if (forecast.data) {
      dispatch(updateForecast(JSON.stringify(forecast.data)))
    }
  }, [forecast.data])

  useEffect(() => {
    if (weather.data) {
      dispatch(updateWeather(weather.data));
    }
  })


  return (
    <div className="App">
      <SearchBar />
      <Outlet />
      <div className='navigation-links'>
        <NavLink to='/'>
          Today
        </NavLink>
        <NavLink to='/tomorrow'>
          Tomorrow
        </NavLink>
        <NavLink to='/days'>
          Next 4 Days
        </NavLink>
      </div>
    </div>
  );
}

export default App;
