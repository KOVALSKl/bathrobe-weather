import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PageType } from "../../utils/types";
import CurrentForecast from "../../components/Frames/CurrentForecast/CurrentForecast";
import NextDayWeatherList from "../../components/NextDayWeatherList/NextDayWeatherList";
import { useGetCurrentWeatherQuery, useGetWeatherForecastQuery } from "../../redux/api/weatherApi";

function ForecastPage({ cnt, type }) {

    const place = useSelector(state => state.search.value);
    const [forecast, setForecast] = useState([]);

    const forecastSlice = useSelector(state => state.currentforecast.value);
    const weatherSlice = useSelector(state => state.weather.value)

    useMemo(() => {
        if (forecastSlice && forecastSlice.list) {
            let date = new Date();
            switch (type) {
                case PageType.TODAY:
                    setForecast({
                        ...forecastSlice,
                        list: forecastSlice.list.filter((item) => new Date(item.dt * 1000).toLocaleDateString() === date.toLocaleDateString())
                    })
                    break;
                case PageType.TOMORROW:
                    date.setDate(date.getDate() + 1);
                    setForecast({
                        ...forecastSlice,
                        list: forecastSlice.list.filter((item) =>
                            (new Date(item.dt * 1000).toLocaleDateString() === date.toLocaleDateString()))
                    })
                    break;
                case PageType.DAYS:
                    let rightForecasts = forecastSlice.list.filter((item) => {
                        let itemDate = new Date(item.dt * 1000)
                        return (itemDate.toLocaleDateString() !== date.toLocaleDateString() &&
                            itemDate.getHours() === 15
                        )
                    })
                    setForecast({
                        ...forecastSlice,
                        list: (rightForecasts.length > 4) ? rightForecasts.splice(0, 4) : rightForecasts
                    })
            }
        }
    }, [forecastSlice, type])

    const loading = !forecast || !forecast.list || !weatherSlice;

    return (
        (loading)
            ? <span>Loading...</span>
            : <div className='today page'>
                <CurrentForecast
                    forecast={weatherSlice}
                    city={forecast.city.name}
                    country={forecast.city.country} />
                <NextDayWeatherList
                    forecastList={forecast}
                    type={type} />
            </div>
    );
}

export default ForecastPage;