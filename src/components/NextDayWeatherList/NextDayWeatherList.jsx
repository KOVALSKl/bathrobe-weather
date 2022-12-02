import { CLOWNSSTYLES } from '../../utils/types';
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
                ? <li className='no-data'>
                    <img
                        style={CLOWNSSTYLES['no_data']}
                        src={require('../../assets/clowns/no_data.png')} />
                    <span>The day is over Bunny</span>
                </li>
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