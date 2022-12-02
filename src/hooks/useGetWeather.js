import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetWeather({ to, q, cnt }) {
    const [data, setData] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_WEATHER_API_LINK}/${to}`, {
            params: {
                q,
                units: 'metric',
                cnt: `${cnt ?? 0}`,
                appid: `${process.env.REACT_APP_WEATHER_API_KEY}`
            }
        })
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }, [q])

    return {
        data,
        isLoading,
        error
    }
}