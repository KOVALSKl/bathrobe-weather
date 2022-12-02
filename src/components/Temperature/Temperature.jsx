import './Temperature.scss'

function Temperature({ main }) {
    return (
        <div className="temperature">
            <span className="current-temp">{Math.round(main.temp)}&deg;C</span>
            <div className="temp-info">
                <span className="temp-info__item">
                    Feels like: {Math.round(main.feels_like)}&deg;C
                </span>
                <span className="temp-info__item">
                    Max: {Math.round(main.temp_max)}&deg;C
                </span>
                <span className="temp-info__item">
                    Min: {Math.round(main.temp_min)}&deg;C
                </span>
            </div>
        </div>
    );
}

export default Temperature;