import { useState, useEffect, memo } from 'react';
import { CLOWNSSTYLES } from '../../../utils/types';
import MainInfo from '../../MainInfo/MainInfo';
import Temperature from '../../Temperature/Temperature';
import './CurrentForecast.scss'


function CurrentForecast({ forecast, city, country }) {

    const [time, setTime] = useState(new Date().toLocaleTimeString('en-EN',
        { weekday: 'long', hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-EN',
                { weekday: 'long', hour: '2-digit', minute: '2-digit' }));
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    const iconID = forecast.weather[0].icon.slice(0, 2);

    return (
        <div className='current-forecast'>
            <div className='city'>
                <span>{city}</span>
                <sup>{country}</sup>
                <span className='current-date'>
                    {time}
                </span>
            </div>
            <div className='forecast-info'>
                <Temperature main={forecast.main} />
                <MainInfo
                    main={forecast.main}
                    wind={forecast.wind}
                    weather={forecast.weather} />
            </div>
            <img
                className='zont'
                style={CLOWNSSTYLES[iconID]}
                src={require(`../../../assets/clowns/${iconID}.png`)} />
        </div>
    );
}

export default memo(CurrentForecast);