import NextDayWeather from '../Frames/NextDayWeather/NextDayWeather';
import './NextDayWeatherList.scss'

function NextDayWeatherList({ forecastList, type }) {

    const isEmpty = forecastList.list.length === 0;

    return (
        <ul className={['hourly-forecast', (isEmpty) ? 'empty' : 'fullfield'].join(' ')}
            style={{
                justifyContent: (forecastList.list.length < 4)
                    ? 'center'
                    : 'initial'
            }}
        >
            {isEmpty
                ? <li>No data</li>
                :
                forecastList.list.map((item, index) => {
                    return (
                        <NextDayWeather
                            item={item}
                            key={index}
                            type={type}
                        />
                    )
                })}
        </ul>
    );
}

export default NextDayWeatherList;