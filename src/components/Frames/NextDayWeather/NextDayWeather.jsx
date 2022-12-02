import './NextDayWeather.scss'
import { PageType } from '../../../utils/types'

function NextDayWeather({ item, type }) {

    const time = new Date(item.dt * 1000);
    const hours = time.getHours();
    const minutes = time.getMinutes();

    return (
        <li className='next-day-frame'>
            {type !== PageType.DAYS
                ? <span>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}</span>
                : <span>
                    {time.toLocaleDateString(`en-EN`, { weekday: 'short' })}
                </span>
            }
            <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            />
            <span className='temp'>{Math.round(item.main.temp)}&deg;C</span>
        </li>
    );
}

export default NextDayWeather;