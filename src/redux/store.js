import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice';
import forecastReducer from './slices/currentForecastSlice';
import weatherReducer from './slices/currentWeatherSlice';
import { weatherApi } from './api/weatherApi';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        currentforecast: forecastReducer,
        weather: weatherReducer,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(weatherApi.middleware)
})