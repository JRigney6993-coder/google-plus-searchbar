import React, { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from 'axios';

interface WeatherCondition {
    text: string;
}

interface WeatherCurrent {
    temp_f: number;
    condition: WeatherCondition;
}

interface WeatherLocation {
    name: string;
}

interface WeatherData {
    location: WeatherLocation;
    current: WeatherCurrent;
}

const WeatherComponent: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        axios.get('http://api.weatherapi.com/v1/current.json', {
            params: {
                key: '5c0379b6d24149758c011612241701',
                q: 'auto:ip'
            }
        })
            .then(response => {
                setWeather(response.data as WeatherData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div className='Weather'>
            <div className='Weather-header'>
                <TiWeatherPartlySunny className='Weather-Icon' />
                {weather.current.temp_f}<span>°F</span>
            </div>
            {weather.location.name}, {weather.current.condition.text}
        </div>
    );
};

export default WeatherComponent;