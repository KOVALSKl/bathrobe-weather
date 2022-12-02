import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { CLOWNSSTYLES, PageType } from "../../utils/types";
import CurrentForecast from "../../components/Frames/CurrentForecast/CurrentForecast";
import NextDayWeatherList from "../../components/NextDayWeatherList/NextDayWeatherList";

import './ForecastPage.scss'

function ForecastPage({ type }) {

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
                    break;
                default:
                    setForecast({
                        ...forecastSlice
                    })
            }
        }
    }, [forecastSlice, type])

    const loading = !forecast || !forecast.list || !weatherSlice;

    return (
        <div className={['today page', (loading) ? 'loading' : 'loaded'].join(' ')}>
            {(loading)
                ? <div className="loader">
                    <img
                        style={CLOWNSSTYLES['loading']}
                        src={require('../../assets/clowns/loading.png')}
                    />
                    <span>Loading...</span>
                </div>
                :
                <div>
                    <CurrentForecast
                        forecast={weatherSlice}
                        city={forecast.city.name}
                        country={forecast.city.country} />
                    <NextDayWeatherList
                        forecastList={forecast}
                        type={type} />
                </div>
            }
        </div>
    );
}

export default ForecastPage;