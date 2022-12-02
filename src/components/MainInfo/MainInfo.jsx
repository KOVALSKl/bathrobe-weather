import './MainInfo.scss'

function getCardinalDirection(angle) {
    const directions = ['↑N', '↗N-E', '→E', '↘S-E', '↓S', '↙S-W', '←W', '↖N-W'];
    return directions[Math.round(angle / 45) % 8];
}

function MainInfo({ main, wind, weather }) {
    return (
        <div className='main-info'>
            <span className='description'>{weather[0].description}</span>
            <span className='main-info__item'>
                Pressure: {main.pressure}MB
            </span>
            <span className='main-info__item'>
                Humidity: {main.humidity}%
            </span>
            <div className='wind'>
                <span className='direction'>
                    {getCardinalDirection(wind.deg)}
                </span>
                <span>
                    {wind.speed}km/h
                </span>
            </div>
        </div>
    );
}

export default MainInfo;