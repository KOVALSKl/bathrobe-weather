import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'forecast',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5'
    }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (name) =>
                `/weather?q=${name}&appid=ed496b58f3156a3c7084de401d9fa789&units=metric`,
        }),
        getWeatherForecast: builder.query({
            query: ({ name, cnt }) =>
                `/forecast?q=${name}&appid=ed496b58f3156a3c7084de401d9fa789&cnt=${cnt}&units=metric`,
        }),
    })
})

export const { useGetCurrentWeatherQuery, useGetWeatherForecastQuery } = weatherApi