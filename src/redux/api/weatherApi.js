import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'forecast',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_WEATHER_API_LINK}`
    }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (name) =>
                `/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        }),
        getWeatherForecast: builder.query({
            query: ({ name, cnt }) =>
                `/forecast?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&cnt=${cnt}&units=metric`,
        }),
    })
})

export const { useGetCurrentWeatherQuery, useGetWeatherForecastQuery } = weatherApi